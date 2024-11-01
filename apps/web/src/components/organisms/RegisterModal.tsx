// import "bootstrap/dist/css/bootstrap.min.css";
// import "/public/assets/css/bootstrap.min.css";

import Swal from "sweetalert2";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { createData } from "../../api/axios";
import { AxiosError } from "axios";

const RegisterModal = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isTermsChecked, setIsTermsChecked] = useState(false);
  // const router = useRouter();

  const initialValues = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .required("Password is required")
        .min(5, "Password should have 5 characters at minimum"),
      firstName: Yup.string()
        .required("First name is required")
        .min(3, "First name should have 3 characters at minimum"),
      lastName: Yup.string()
        .required("Last name is required")
        .min(3, "Last name should have 3 characters at minimum"),
    }),
    onSubmit: async (values) => {
      setIsSubmitting(true);
      console.log("start register");

      try {
        const response = await createData(
          "api",
          "users/v1",
          values,
          "application/json"
        );

        if (response.status === 201) {
          await Swal.fire({
            title: "Successfully Signed Up!",
            text: "You can now log in.",
            icon: "success",
            confirmButtonText: "OK",
          });
          console.log("success register");

          // router.push("/login");
        }
      } catch (error) {
        console.log("failed register");

        if (error instanceof AxiosError && error.response) {
          const errorMessage =
            error.response.data.message ||
            "An error occurred while signing up.";

          Swal.fire({
            icon: "error",
            title: "Registration failed!",
            text: errorMessage,
            confirmButtonText: "Try Again",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Unexpected error",
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
    <section className="flex justify-center">
      <div className="modal-content">
        {/* BUTTON CLOSE */}
        <div className="flex justify-between">
          <div></div>
          <button
            type="button"
            className="flex items-center px-3 py-1 text-zinc-500"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            X
          </button>
        </div>

        {/* FORM & IMAGE */}
        <div className="flex flex-row align-items-center">
          {/* FORM */}
          <div className="flex items-center w-1/3 justify-center">
            <div className="">
              <h2 className="text-4xl font-bold mb-20">Create Account</h2>

              <form className="" onSubmit={formik.handleSubmit}>
                {/* FIRST NAME */}
                <div className="border-0 p-4 mb-4 border-b border-gray-300 text-[#4f536c] w-full mb-30">
                  <input
                    type="text"
                    id="firstName"
                    placeholder="First name"
                    {...formik.getFieldProps("firstName")}
                    className={`focus:outline-none w-full ${
                      formik.touched.firstName && formik.errors.firstName
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  />
                </div>
                {formik.touched.firstName && formik.errors.firstName ? (
                  <div className="text-red-700 text-xs mt-1">
                    {formik.errors.firstName}
                  </div>
                ) : null}

                {/* LAST NAME */}
                <div className="border-0 p-4 mb-4 border-b border-gray-300 text-[#4f536c] w-full mb-30">
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Last name"
                    {...formik.getFieldProps("lastName")}
                    className={`focus:outline-none w-full ${
                      formik.touched.lastName && formik.errors.lastName
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  />
                </div>
                {formik.touched.lastName && formik.errors.lastName ? (
                  <div className="text-red-700 text-xs mt-1">
                    {formik.errors.lastName}
                  </div>
                ) : null}

                <div className="border-0 p-4 mb-4 border-b border-gray-300 text-[#4f536c] w-full mb-30">
                  <input
                    type="text"
                    id="email"
                    placeholder="Email Address"
                    {...formik.getFieldProps("email")}
                    className={`focus:outline-none w-full ${
                      formik.touched.email && formik.errors.email
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  />
                </div>
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-700 text-xs mt-1">
                    {formik.errors.email}
                  </div>
                ) : null}

                <div className="border-0 p-4 border-b border-gray-300 text-[#4f536c] w-full mb-30">
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    {...formik.getFieldProps("password")}
                    className={`focus:outline-none w-full ${
                      formik.touched.password && formik.errors.password
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  />
                </div>
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-red-700 text-xs mt-1">
                    {formik.errors.password}
                  </div>
                ) : null}

                {/* TERMS */}
                <div className="pb-xxl-3 mt-3">
                  <div className="form-check d-flex align-items-center gap-2 from-customradio">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault11"
                      onChange={() => setIsTermsChecked(!isTermsChecked)}
                    />
                    <label
                      className="form-check-label ml-3"
                      htmlFor="flexRadioDefault11"
                    >
                      I accept your terms & conditions
                    </label>
                  </div>
                </div>

                {/* BUTTON */}
                <div className="my-4 flex justify-center">
                  <button
                    className={`relative z-10 inline-block overflow-hidden align-middle text-center border-none capitalize bg-[#384BFF] text-white text-[16px] font-medium leading-none px-10 py-5 min-w-[170px] w-full hover:shadow-none hover:text-white before:content-[''] before:absolute before:h-full before:bottom-0 before:left-0 before:w-0 hover:before:w-full before:bg-[#0F0D1D] before:z-[-1] before:transition-all before:duration-400 before:ease-out 
      ${!formik.isValid || !formik.dirty || isSubmitting || !isTermsChecked ? "opacity-70 cursor-not-allowed" : ""}`}
                    type="submit"
                    disabled={
                      !formik.isValid ||
                      !formik.dirty ||
                      isSubmitting ||
                      !isTermsChecked
                    }
                  >
                    <span>Create Account</span>
                  </button>
                </div>
              </form>

              <div className="relative text-center flex items-center justify-center text-[16px] font-medium text-[#445375] my-7">
                <span>or</span>
                <div className="absolute left-0 h-px w-[44%] bg-[#d9d9d9]"></div>
                <div className="absolute right-0 h-px w-[44%] bg-[#d9d9d9]"></div>
              </div>

              <div className="grid gap-3 mb-4">
                <div>
                  <a
                    href="#"
                    className="flex gap-2 p-3 items-center justify-center border-zinc-200 border
                    "
                  >
                    <img src="assets/img/sign/google.png" alt="img" />
                    <div> Continue With Google</div>
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="flex gap-2 p-3 items-center justify-center border-zinc-200 border
                    "
                  >
                    <img src="assets/img/sign/fb.png" alt="img" />
                    <div>Continue with Facebook</div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* IMAGE */}
          <div className="modal-right-thumb position-relative">
            <img src="assets/img/sign/create.png" alt="img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterModal;
