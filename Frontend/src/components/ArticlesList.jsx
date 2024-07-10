import Article from "./Article";

const ArticlesList = ({ articles = [] }) => {
  return (
    <>
      {articles.length ? (
        articles.map((article) => (
          <Article key={article._id} article={article} />
        ))
      ) : (
        <h2 style={{ textAlign: "center" }}>No posts yet!</h2>
      )}
    </>
  );
};
export default ArticlesList;
