const LoginModal = () => {
  return (
    <section className="flex justify-center h-screen items-center">
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
              <h2 className="text-4xl font-bold mb-20">Welcome Back!</h2>

              <form className="">
                <div className="border-0 p-4 mb-4 border-b border-gray-300 text-[#4f536c] w-full mb-30">
                  <input
                    type="text"
                    placeholder="Email Address"
                    className="focus:outline-none w-full"
                  />
                </div>

                <div className="border-0 p-4 border-b border-gray-300 text-[#4f536c] w-full mb-30">
                  <input
                    type="text"
                    placeholder="Password"
                    className="focus:outline-none w-full"
                  />
                </div>

                <div className="flex justify-between text-sm mt-4">
                  <div>Remember Me</div>
                  <div className="text-[#384BFF] ">
                    <a href=""> Forgot Your Password?</a>
                  </div>
                </div>

                {/* BUTTON */}
                <div className="my-4 flex justify-center">
                  <button className="relative z-10 inline-block overflow-hidden align-middle text-center border-none capitalize bg-[#384BFF] text-white text-[16px] font-medium leading-none px-10 py-5 min-w-[170px] w-full hover:shadow-none hover:text-white before:content-[''] before:absolute before:h-full before:bottom-0 before:left-0 before:w-0 hover:before:w-full before:bg-[#0F0D1D] before:z-[-1] before:transition-all before:duration-400 before:ease-out">
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

              <div
                className="
              flex gap-2"
              >
                <div>Don't have an account?</div>
                <span>
                  <a href="/register" className="text-[#384BFF] font-bold">
                    {" "}
                    Register here.
                  </a>
                </span>
              </div>
            </div>
          </div>

          {/* IMAGE */}
          <div className="modal-right-thumb position-relative">
            <img src="assets/img/sign/login.png" alt="img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginModal;
