import ContactUsFormSection from "../sections/ContactUsFormSection";
import { useAppSelector } from "../../lib/redux/hooks";
import { RootState } from "../../lib/redux/store";
import {
  IContactUsFormSection,
  IOurSupportSection,
} from "../../types/ContactPage";
import Loading from "../atoms/Loading";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import OurSupportSection from "../sections/OurSupportSection";

function ContactUsPage() {
  const { contactUsPage, error } = useAppSelector(
    (state: RootState) => state.strapi
  );

  if (!contactUsPage) return <Loading />;
  console.log("Contact Us:", contactUsPage);

  if (error) return <div>Error fetching data: {error}</div>;

  const contactUsForm = contactUsPage?.data?.attributes?.contactUsFormSection;
  const ourSupport = contactUsPage?.data?.attributes?.ourSupportSection;

  return (
    <>
      <Header />
      <OurSupportSection ourSupport={ourSupport as IOurSupportSection} />
      <ContactUsFormSection
        contactUsForm={contactUsForm as IContactUsFormSection}
      />
      <Footer />
    </>
  );
}

export default ContactUsPage;
