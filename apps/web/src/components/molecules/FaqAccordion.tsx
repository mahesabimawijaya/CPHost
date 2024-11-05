import { MdKeyboardDoubleArrowDown, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { QuestionList } from "../../types/LandingPage";

const FaqAccordion = ({ question, isOpen, onToggle }: { question: QuestionList; isOpen: boolean; onToggle: () => void }) => {
  return (
    <div onClick={onToggle} className="flex flex-col w-[540px] cursor-pointer duration-300">
      <div className="flex items-center justify-between text-[22px] py-[25px] font-semibold capitalize">
        {question.question} {isOpen ? <MdKeyboardDoubleArrowDown size={30} /> : <MdKeyboardDoubleArrowRight size={30} />}
      </div>
      <div className={`overflow-hidden transition-all duration-300 w-[510px] text-lg text-gray-500 ${isOpen ? "max-h-96 pb-[25px]" : "max-h-0"}`}>{question.answer}</div>
      <hr />
    </div>
  );
};

export default FaqAccordion;
