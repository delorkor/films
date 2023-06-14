import axios from "axios";
export const PagesFilms = async (PagenNumber = 1) => {
  let url = `http://diplom.loc/api/Films?page=${PagenNumber}`;
  const User = await axios.get(url);
  // console.log(User.data);
  return User.data;
};
