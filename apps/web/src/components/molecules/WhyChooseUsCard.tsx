interface WhyChooseUsCard {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const WhyChooseUsCard: React.FC<WhyChooseUsCard> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className="flex flex-col gap-4 w-80 h-64 p-4 justify-center items-center text-center bg-[#F1F5FA] border border-[#CAD3FF]  hover:border-primary transition duration-300 ease-in rounded-xl">
      <div className="flex justify-center border-secondary border rounded-xl w-16 p-2 items-center text-center flip-icon">
        <img src={icon} alt="icon" />
      </div>
      <h1 className="font-bold text-2xl">{title}</h1>{" "}
      <h2 className="text-[#354062]">{description}</h2>{" "}
    </div>
  );
};

export default WhyChooseUsCard;
