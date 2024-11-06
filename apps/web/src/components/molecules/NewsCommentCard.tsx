const NewsCommentCard = () => {
  return (
    <div className="flex gap-8 border-b pb-6 border-secondary">
      <div>
        <img
          src="https://ex-coders.com/html/cphost/assets/img/news/comment.png"
          alt=""
        />
      </div>

      <div className="flex-col flex  gap-2 text-lg">
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold">Albert</h1>
            <h2 className="text-gray-500">March 20, 2024 at 2:37 pm</h2>
          </div>
          <div className="text-primary">rating</div>
        </div>

        <p className="text-gray-600 w-[700px]">
          Neque porro est qui dolorem ipsum quia quaed inventor veritatis et
          quasi architecto var sed efficitur turpis gilla sed sit amet finibus
          eros. Lorem Ipsum is simply dummy
        </p>
        <button className="px-4 py-2 text-primary bg-third rounded-full w-24 my-4">
          Reply
        </button>
      </div>
    </div>
  );
};

export default NewsCommentCard;
