import { FaArrowRight } from "react-icons/fa";

function ContactUsForm() {
  return (
    <>
      <div className="flex-col flex border-2 rounded-xl border-secondary w-full">
        <div>
          <h1 className="px-6 pt-8 font-bold text-3xl">Get In Touch</h1>
        </div>

        <form className="flex flex-col gap-4 p-6">
          <div className="flex gap-6">
            <div className="border p-4 mb-4 border-secondary text-[#4f536c] w-80 rounded-lg mb-30">
              <input
                type="text"
                placeholder="Full Name"
                className="focus:outline-none w-full"
              />
            </div>

            <div className="border p-4 mb-4 border-secondary text-[#4f536c] w-80 rounded-lg mb-30">
              <input
                type="text"
                placeholder="Email Address"
                className="focus:outline-none w-full"
              />
            </div>
          </div>

          <div className="flex gap-6">
            <div className="border p-4 mb-4 border-secondary text-[#4f536c] w-80 rounded-lg mb-30">
              <input
                type="text"
                placeholder="Phone Number"
                className="focus:outline-none w-full"
              />
            </div>

            <div className="border p-4 mb-4 border-secondary text-[#4f536c] w-80 rounded-lg mb-30">
              {/* Dropdown for Hosting selection */}
              <select className="focus:outline-none w-full h-full border-none bg-white text-[#4f536c]">
                <option value="" disabled selected>
                  Topic
                </option>
                <option value="hosting">Hosting</option>
                <option value="domain">Domain</option>
                <option value="general">General</option>
              </select>
            </div>
          </div>

          <div className="border p-4 mb-4 border-secondary text-[#4f536c] w-full h-40 rounded-lg mb-30">
            <input
              type="text"
              placeholder="Messages"
              className="focus:outline-none w-full"
            />
          </div>

          <div className="pb-xxl-3">
            <div className="form-check d-flex align-items-center gap-2 from-customradio">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault11"
              />
              <label
                className="form-check-label ml-3"
                htmlFor="flexRadioDefault11"
              >
                Collaboratively formulate principle capital. Progressively
                evolve user{" "}
              </label>
            </div>
          </div>

          <div className="my-4 flex justify-center">
            <button className="rounded-xl relative z-10 overflow-hidden align-middle text-center border-none capitalize bg-[#384BFF] text-white text-[16px] font-medium leading-none px-10 py-5 min-w-[170px] w-full hover:shadow-none hover:text-white before:content-[''] before:absolute before:h-full before:bottom-0 before:left-0 before:w-0 hover:before:w-full before:bg-[#0F0D1D] before:z-[-1] before:transition-all flex gap-2 justify-center">
              <span>Submit Now</span>
              <span>
                <FaArrowRight />
              </span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ContactUsForm;
