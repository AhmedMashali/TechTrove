export default async (url, options, data, errMsg) => {
  try {
    const res = await fetch(url, options);
    data = await res.json();
  } catch (error) {
    errMsg = error.message;
  } finally {
    return {
      data,
      errMsg,
    };
  }
};
