import client from "./client";

const url = "http://localhost:3500/articles";

export const getArticles = async () => {
  try {
    const { data, errMsg } = await client(url);
    if (errMsg) throw new Error(errMsg);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const addArticle = async (article) => {
  try {
    const postOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(article),
    };

    const { data, errMsg } = await client(url, postOptions);
    if (errMsg) throw new Error(errMsg);
    return data;
  } catch (error) {
    console.log(error);
  }
};
