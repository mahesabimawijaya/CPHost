import { FaArrowRightLong } from "react-icons/fa6";
import { ContactUs } from "../../types/LandingPage";
import SectionTitle from "../atoms/SectionTitle";
import SectionSubTitle2 from "../atoms/SectionSubTitle2";

const ContactUsSection = ({ contactUs }: { contactUs: ContactUs }) => {
  return (
    <section className="relative w-full flex justify-center">
      <div id="contact-us-card" className="flex items-end justify-between absolute w-primary bg-primary px-[90px] py-[100px] top-[-180px] rounded-xl">
        <div className="flex flex-col space-y-5 w-[700px]">
          <SectionSubTitle2 text={contactUs.subtitle} color="white" />
          <SectionTitle title={contactUs.title} color="white" />
        </div>
        <button className="bg-[#FFA31A] text-white px-10 text-lg py-4 rounded-full flex items-center gap-2">
          {contactUs.talkToButton} <FaArrowRightLong />{" "}
        </button>
      </div>
    </section>
  );
};

export default ContactUsSection;
