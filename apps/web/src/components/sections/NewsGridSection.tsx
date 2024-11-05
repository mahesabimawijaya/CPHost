import NewsGridCard from "../molecules/NewsGridCard";

const NewsGridSection = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mx-auto max-w-screen-xl py-20">
      <NewsGridCard />
      <NewsGridCard />
      <NewsGridCard />
      <NewsGridCard />
      <NewsGridCard />
    </section>
  );
};

export default NewsGridSection;
