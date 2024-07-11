import ArticlesList from "../components/ArticlesList";
import { useEffect } from "react";
import { getArticles } from "../APIs/articles";
import Spinner from "../components/Spinner";

const HomePage = ({ articles, setArticles, isLoading, setIsLoading }) => {
  useEffect(() => {
    const onLoadingArticles = async () => {
      const fetchedArticles = await getArticles();
      console.log(fetchedArticles);
      setArticles(fetchedArticles);
      setIsLoading(false);
      return;
    };
    onLoadingArticles();
  }, []);

  return (
    <>
      <main className="articles">
        <div className="container">
          {isLoading ? (
            <Spinner isLoading={isLoading} />
          ) : (
            <ArticlesList articles={articles} setArticles={setArticles} />
          )}
        </div>
      </main>
    </>
  );
};
export default HomePage;
