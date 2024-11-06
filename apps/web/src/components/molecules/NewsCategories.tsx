const NewsCategories = () => {
  return (
    <div className="bg-third p-6 w-[350px] flex flex-col gap-4">
      <h1 className="border-b-2 border-primary font-bold text-xl pb-4">
        Categories
      </h1>
      <div
        className="bg-white border border-secondary flex justify-between p-4 w-full font-semibold hover:bg-primary hover:text-white transition ease-in hover:cursor-pointer
      "
      >
        <h2>Cloud Hosting</h2>
        <h2>(08)</h2>
      </div>
    </div>
  );
};

export default NewsCategories;
