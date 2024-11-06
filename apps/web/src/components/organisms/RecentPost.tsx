import RecentPostCard from "../molecules/RecentPostCard";

const RecentPost = () => {
  return (
    <div className="bg-third p-6 w-[350px] flex flex-col gap-4">
      <h1 className="border-b-2 border-primary font-bold text-xl pb-4">
        Recent Post
      </h1>

      <div className="flex  flex-col gap-3">
        <RecentPostCard />
        <RecentPostCard />
        <RecentPostCard />
      </div>
    </div>
  );
};

export default RecentPost;
