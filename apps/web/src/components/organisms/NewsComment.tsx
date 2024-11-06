import React from "react";
import NewsCommentCard from "../molecules/NewsCommentCard";

const NewsComment = () => {
  return (
    <div>
      <h1 className="font-bold my-8 text-3xl">2 Comments</h1>

      <div className="flex flex-col gap-6">
        <NewsCommentCard />
        <NewsCommentCard />
      </div>
    </div>
  );
};

export default NewsComment;
