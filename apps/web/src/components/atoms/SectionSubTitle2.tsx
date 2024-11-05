const SectionSubTitle2 = ({ text, color }: { text: string; color?: string }) => {
  return (
    <div className="flex items-center">
      <p className={`uppercase mr-3 ${color ? `text-${color}` : "text-primary"} font-medium text-lg`}>{text}</p>
      <span className={`${color ? `bg-${color}` : `bg-primary`} w-5 h-[2px]`}></span>
    </div>
  );
};

export default SectionSubTitle2;
