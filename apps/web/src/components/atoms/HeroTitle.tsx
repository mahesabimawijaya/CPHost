const HeroTitle = ({ title }: { title: string }) => {
  const styledTitle = title.replace(/Hosting/, '<span class="text-[#FFA31A] underline">Hosting</span>');

  return <h1 className="text-[60px] font-bold mb-5 capitalize" dangerouslySetInnerHTML={{ __html: styledTitle }} />;
};

export default HeroTitle;
