const getDate = (rawDate: number | string) => {
  const date = new Date(rawDate);
  return date.toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export default getDate;
