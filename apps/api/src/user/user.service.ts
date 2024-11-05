import {
  BadRequestException,
  ConflictException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User, Roles } from './entities/user.entity';
import { Repository } from 'typeorm';
import { response } from 'src/utils/response.util';
import { comparePassword, hashPassword } from 'src/libs/bcrypt';
import { LoginUserDto } from './dto/login-user.dto';
import { createToken } from 'src/libs/jwt';
import { encrypt } from 'src/libs/crypto';
import { Response } from 'express';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async register(createUserDto: CreateUserDto) {
    const { firstName, lastName, email, password, role } = createUserDto;

    if (!firstName || !lastName || !email || !password) {
      throw new BadRequestException(
        response(
          false,
          'First name, last name, email, and password are required!',
          null,
        ),
      );
    }

    try {
      const existingUser = await this.userRepository.findOne({
        where: { email },
      });

      if (existingUser) {
        throw new ConflictException(
          response(false, 'User already exists!', null),
        );
      }

      const hashedPassword = await hashPassword(password);

      const newUser = this.userRepository.create({
        firstName,
        lastName,
        email,
        password: hashedPassword,
        role: role ? (role as Roles) : Roles.user,
      });

      const registeredUser = await this.userRepository.save(newUser);
      console.log(registeredUser);

      return response(true, 'User registered successfully!', registeredUser);
    } catch (error) {
      console.error('Login service error:', error);
      if (error instanceof ConflictException) {
        throw error;
      }
      throw new InternalServerErrorException(
        response(false, 'Registration failed. Try again later!', null),
      );
    }
  }

  async login(loginUserDto: LoginUserDto, res: Response) {
    const { email, password } = loginUserDto;

    if (!email || !password) {
      throw new BadRequestException(
        response(false, 'Email and password are required!', null),
      );
    }

    try {
      const user = await this.userRepository.findOne({ where: { email } });

      if (!user) {
        throw new BadRequestException(
          response(false, 'Email or password is invalid!', null),
        );
      }

      const isPasswordValid = await comparePassword(user.password, password);

      if (!isPasswordValid) {
        throw new BadRequestException(
          response(false, 'Email or password is invalid!', null),
        );
      }

      const userInfo = {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      };

      // const accessToken = createToken({ data: userInfo }, '1hr');

      const encryptedUserInfo = Buffer.from(
        encrypt(JSON.stringify(userInfo)),
      ).toString('base64');

      const refreshToken = createToken({ id: user.id }, '12h');

      const accessToken = createToken({ data: encryptedUserInfo }, '1hr');

      // const encryptedAccessToken = encrypt(accessToken);

      // const refreshToken = createToken({ id: user.id }, '12h');
      // const encryptedRefreshToken = encrypt(refreshToken);

      return res
        .status(200)
        .cookie('access_token', accessToken, {
          // httpOnly: true,
          // secure: process.env.NODE_ENV === 'production',
        })
        .cookie('refresh_token', refreshToken, {
          // httpOnly: true,
          // secure: process.env.NODE_ENV === 'production',
        })
        .send({
          success: true,
          message: 'Login successful!',
          accessToken,
          refreshToken,
        });
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }
      throw new BadRequestException(response(false, 'Login failed', null));
    }
  }
}
