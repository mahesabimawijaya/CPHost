import { useState } from "react";
import { Faq } from "../../types/LandingPage";
import { baseImageUrl } from "../../utils/helper";
import SectionTitle from "../atoms/SectionTitle";
import SectionSubTitle2 from "../atoms/SectionSubTitle2";
import FaqAccordion from "../molecules/FaqAccordion";

const FaqSection = ({ faq }: { faq: Faq }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full flex justify-center h-[1000px] py-[200px]">
      <div className="w-primary flex space-x-20">
        <div id="faq-left">
          <img src={baseImageUrl + faq.image.data.attributes.url} alt="" />
        </div>
        <div id="faq-right" className="flex flex-col">
          <div className="mb-5">
            <SectionSubTitle2 text={faq.subtitle} />
          </div>
          <div className="w-[480px] mb-10">
            <SectionTitle title={faq.title} />
          </div>
          <div className="flex flex-col">
            {faq.questionLists.map((question) => (
              <FaqAccordion key={question.id} question={question} isOpen={openIndex === question.id} onToggle={() => toggleAccordion(question.id)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
