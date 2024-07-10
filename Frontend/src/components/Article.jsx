import user from "../assets/user-img.jpg";
import articleImage from "../assets/snowflake-algorithm.jpg";
import {
  RiBookMarkedLine,
  RiChat1Fill,
  RiHeart2Fill,
  RiMoreFill,
} from "react-icons/ri";

const Article = ({ article }) => {
  const getDate = () => {
    const date = new Date(article.createdAt);
    return `${date.getDate()} ${date.toLocaleString("default", {
      month: "short",
    })}`;
  };
  return (
    <article className="article">
      <div className="article-writer">
        <div className="article-writer__avatar">
          <img src={user} alt="author" />
        </div>
        <div className="article-writer__info">
          <div className="article-writer__name">{article.author.name}</div>
          <div className="article-writer__bio">{article.author.bio}</div>
        </div>
      </div>
      <div className="artilce-body">
        <div className="article-content">
          <h2 className="artilce-title">{article.title}</h2>
          <p className="article-description">{article.description}</p>
        </div>
      </div>
      <div className="article-actions">
        <div className="article-info">
          <div className="article-date">{getDate()}</div>
          <div className="article-main-likes">
            <RiHeart2Fill className="article-actions-i" />
            <div className="article-main-likes-count">{article.likes}</div>
          </div>
          <div className="article-main-comments">
            <RiChat1Fill className="article-actions-i" />
            <div className="article-main-comments-count">
              {article.comments}
            </div>
          </div>
        </div>
        <div className="article-options">
          <RiBookMarkedLine className="article-actions-i" />
          <RiMoreFill className="article-actions-i" />
        </div>
      </div>
      <div className="break-line"></div>
    </article>
  );
};
export default Article;
