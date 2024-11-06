import NewsCategories from "../molecules/NewsCategories";
import NewsPost from "../organisms/NewsPost";
import NewsSearch from "../molecules/NewsSearch";
import NewsTags from "../molecules/NewsTags";
import RecentPost from "../organisms/RecentPost";
import NewsComment from "../organisms/NewsComment";

const NewsDetailSection = () => {
  return (
    <section className="flex flex-row gap-6 justify-center">
      <div>
        <NewsPost />
        <NewsComment />
        <div>form comment</div>
      </div>
      <div className="flex flex-col gap-6">
        <NewsSearch />

        <NewsCategories />

        <RecentPost />
        <NewsTags />
      </div>
    </section>
  );
};

export default NewsDetailSection;
