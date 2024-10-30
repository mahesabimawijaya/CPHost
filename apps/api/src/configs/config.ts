import 'dotenv/config';
import { CorsOptions } from 'cors';

export const corsOptions: CorsOptions = {
  origin: ['http://localhost:5173'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  allowedHeaders: 'Content-Type,Authorization',
};

export const PORT = process.env.PORT || 6000;
export const SECRET_KEY = process.env.SECRET_KEY || '';
