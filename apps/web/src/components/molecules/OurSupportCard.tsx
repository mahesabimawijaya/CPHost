interface OurSupportCardProps {
  id: number;
  icon: string;
  title: string;
  description: string;
}

const OurSupportCard: React.FC<OurSupportCardProps> = ({
  icon,
  title,
  description,
}) => {
  console.log({ icon, title, description });
  return (
    <div className="flex flex-col gap-4 w-80 h-64 p-4 justify-center items-center text-center bg-[#F1F5FA] border border-[#CAD3FF]  hover:border-primary transition duration-300 ease-in rounded-xl">
      <div className="flex justify-between items-center">
        <div className="flex justify-center border-secondary border rounded-xl w-16 p-2 items-center text-center flip-icon">
          <img src={icon} alt="icon" />
        </div>
      </div>
      <h1 className="font-bold text-xl group-hover:text-white">{title}</h1>
      <p className="leading-loose text-[#354062] group-hover:text-white">
        {description}
      </p>
    </div>
  );
};

export default OurSupportCard;
