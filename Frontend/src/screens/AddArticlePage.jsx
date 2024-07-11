import { useState } from "react";
import Spinner from "../components/Spinner";
import { addArticle } from "../APIs/articles";
import { useNavigate } from "react-router-dom";

const AddArticlePage = ({ isLoading, setIsLoading, articles, setArticles }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  const submitNewArticle = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const newArticle = {
        title,
        description,
        content,
      };

      await addArticle(newArticle);

      setTitle("");
      setDescription("");
      setContent("");
      setIsLoading(false);
      return navigate(-1);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <main className="new-article">
        <div className="container">
          <Spinner isLoading={isLoading} />
          <form onSubmit={submitNewArticle}>
            <p>
              <label htmlFor="title">title</label>
              <textarea
                type="text"
                id="title"
                name="title"
                autoFocus
                autoComplete="off"
                placeholder="Title"
                className="new-article__title"
                rows={1}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </p>
            <p>
              <label htmlFor="description">description</label>
              <textarea
                type="text"
                id="description"
                name="description"
                autoComplete="off"
                placeholder="Description"
                className="new-article__description"
                rows={1}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </p>
            <p>
              <label htmlFor="content">content</label>
              <textarea
                type="text"
                id="content"
                name="content"
                autoComplete="off"
                placeholder="Tell your story"
                className="new-article__content"
                rows={18}
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </p>
            <p>
              <button type="submit" className="new-article__btn">
                Publish
              </button>
            </p>
          </form>
        </div>
      </main>
    </>
  );
};
export default AddArticlePage;
