import ContactUsForm from "../organisms/ContactUsForm";
import { IContactUsFormSection } from "../../types/ContactPage";
import { baseImageUrl } from "../../utils/helper";

const ContactUsFormSection = ({
  contactUsForm,
}: {
  contactUsForm: IContactUsFormSection;
}) => {
  const bgImage = baseImageUrl + contactUsForm.bgImage.data.attributes.url;

  return (
    <section
      className="h-screen items-center
    w-screen flex gap-10 px-20"
    >
      <div className="w-1/2 flex flex-col items-center">
        <h1 className="font-semibold text-6xl leading-[55pt]">
          {contactUsForm.title}
        </h1>
        <div>
          <img src={bgImage} alt="" />
        </div>
      </div>

      <div className="w-1/2">
        <ContactUsForm />
      </div>
    </section>
  );
};

export default ContactUsFormSection;
