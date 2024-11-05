import { useState } from "react";
import { useAppDispatch } from "../../lib/redux/hooks";
import Swal from "sweetalert2";
import { AxiosError } from "axios";
import { UserLoginPayload } from "../../types/User";
import { userLogin } from "../../lib/redux/auth.middleware";
import { useFormik } from "formik";
import * as Yup from "yup";

const LoginModal = ({
  onClose,
  onSwitchToRegister,
}: {
  onClose: () => void;
  onSwitchToRegister: () => void;
}) => {
  const dispatch = useAppDispatch();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(5, "Password should have 5 characters at minimum"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values: UserLoginPayload) => {
      setIsSubmitting(true);
      try {
        await dispatch(
          userLogin({
            email: values.email,
            password: values.password,
          } as UserLoginPayload)
        );
        formik.resetForm();
        onClose();
      } catch (error) {
        if (error instanceof AxiosError && error.response) {
          Swal.fire({
            icon: "error",
            title: "Login Failed",
            text:
              error.response.data.message ||
              "An error occurred while signing in.",
            confirmButtonText: "Try Again",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Unexpected Error",
            text: "An unexpected error occurred.",
            confirmButtonText: "Try Again",
          });
        }
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  return (
    <>
      <div
        className="fixed inset-0 bg-black opacity-50 z-40"
        onClick={onClose}
      />
      <section className="flex justify-center h-full w-full items-center fixed inset-0 z-50 text-black">
        <div className="modal-content">
          <div className="flex justify-between">
            <div></div>
            <button
              type="button"
              className="flex items-center px-3 py-1 text-zinc-500 bg-white"
              onClick={onClose}
            >
              X
            </button>
          </div>

          <div className="flex flex-row bg-white">
            <div className="flex items-center w-1/3 justify-center">
              <div>
                <h2 className="text-4xl font-bold mb-20">Welcome Back!</h2>

                <form onSubmit={formik.handleSubmit}>
                  <div className="border-b border-gray-300 mb-4">
                    <input
                      type="text"
                      id="email"
                      placeholder="Email Address"
                      className={`border-none rounded-md focus:outline-none w-full p-2 ${
                        formik.touched.email && formik.errors.email
                          ? "text-red-500"
                          : "border-none "
                      }`}
                      {...formik.getFieldProps("email")}
                    />
                  </div>

                  <div className="border-b border-gray-300 mb-4">
                    <input
                      id="password"
                      type="password"
                      placeholder="Password"
                      className={`border-none rounded-md focus:outline-none w-full p-2 ${
                        formik.touched.password && formik.errors.password
                          ? "text-red-500"
                          : "border-none"
                      }`}
                      {...formik.getFieldProps("password")}
                    />
                  </div>

                  <div className="flex justify-between text-sm mt-4">
                    <div>Remember Me</div>
                    <div className="text-[#384BFF]">
                      <a href="">Forgot Your Password?</a>
                    </div>
                  </div>

                  <div className="my-4 flex justify-center">
                    <button
                      type="submit"
                      className={`relative z-10 inline-block bg-[#384BFF] text-white text-[16px] font-medium leading-none px-10 py-5 min-w-[170px] w-full hover:shadow-none ${
                        !formik.isValid || !formik.dirty || isSubmitting
                          ? "opacity-70 cursor-not-allowed"
                          : ""
                      }`}
                      disabled={
                        !formik.isValid || !formik.dirty || isSubmitting
                      }
                    >
                      <span>Log in</span>
                    </button>
                  </div>
                </form>

                <div className="relative text-center flex items-center justify-center text-[16px] font-medium text-[#445375] my-7">
                  <span>or</span>
                  <div className="absolute left-0 h-px w-[44%] bg-[#d9d9d9]"></div>
                  <div className="absolute right-0 h-px w-[44%] bg-[#d9d9d9]"></div>
                </div>

                <div className="grid gap-3 mb-4">
                  <a
                    href="#"
                    className="flex gap-2 p-3 items-center justify-center border-zinc-200 border"
                  >
                    <img src="assets/img/sign/google.png" alt="Google" />
                    <div> Continue With Google</div>
                  </a>
                  <a
                    href="#"
                    className="flex gap-2 p-3 items-center justify-center border-zinc-200 border"
                  >
                    <img src="assets/img/sign/fb.png" alt="Facebook" />
                    <div>Continue with Facebook</div>
                  </a>
                </div>

                <div className="flex gap-2">
                  <div>Don't have an account?</div>
                  <span>
                    <button
                      type="button"
                      className="text-[#384BFF] font-bold"
                      onClick={() => {
                        onSwitchToRegister();
                        onClose();
                      }}
                    >
                      Register here.
                    </button>
                  </span>
                </div>
              </div>
            </div>

            <div className="modal-right-thumb position-relative">
              <img src="assets/img/sign/login.png" alt="Login" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginModal;
