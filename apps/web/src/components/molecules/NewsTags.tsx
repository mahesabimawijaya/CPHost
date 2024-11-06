const NewsTags = () => {
  return (
    <div className="bg-third p-6 w-[350px] flex flex-col gap-4">
      <h1 className="border-b-2 border-primary font-bold text-xl pb-4">Tags</h1>

      <div className="flex flex-row flex-wrap gap-3">
        <h1 className="bg-white border border-secondary flex justify-between p-2  font-semibold hover:bg-primary hover:text-white transition ease-in hover:cursor-pointer">
          Cloud Hosting
        </h1>

        <h1 className="bg-white border border-secondary flex justify-between p-2 font-semibold hover:bg-primary hover:text-white transition ease-in hover:cursor-pointer">
          Cloud Hosting
        </h1>
        <h1 className="bg-white border border-secondary flex justify-between p-2 font-semibold hover:bg-primary hover:text-white transition ease-in hover:cursor-pointer">
          Cloud Hosting
        </h1>
        <h1 className="bg-white border border-secondary flex justify-between p-2 font-semibold hover:bg-primary hover:text-white transition ease-in hover:cursor-pointer">
          Cloud Hosting
        </h1>
      </div>
    </div>
  );
};

export default NewsTags;
