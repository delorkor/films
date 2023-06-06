import axios from "axios";
export const PagesFilms = async (pagesNumber = 1) => {
  console.log(data);
  const User = await axios.get(
    `https://diplom.loc/api/Films?page=${pagesNumber}`,
    data
  );

  return User;
};
