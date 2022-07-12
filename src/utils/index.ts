export const urlToList = (url: string) => {
  const urlList = url.split("/").filter((i) => i);
  return urlList.map(
    (_, index) => `/${urlList.slice(0, index + 1).join("/")}`
  );
};
