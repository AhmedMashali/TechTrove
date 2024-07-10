import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  useNavigate,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import HomePage from "./screens/HomePage";
import NotDeveloped from "./screens/NotDeveloped";
import AddArticlePage from "./screens/AddArticlePage";
import { useState } from "react";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route
          index
          element={
            <HomePage
              articles={articles}
              setArticles={setArticles}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
          }
        />
        <Route
          path="/write-article"
          element={
            <AddArticlePage
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              articles={articles}
              setArticles={setArticles}
            />
          }
        />
        <Route path="*" element={<NotDeveloped />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};
export default App;
