const SectionTitle = ({ text }: { text: string }) => {
  return (
    <div className="flex items-center">
      <p className="uppercase mr-3 text-primary font-medium text-lg">{text}</p>
      <span className="bg-primary w-5 h-[2px]"></span>
    </div>
  );
};

export default SectionTitle;
