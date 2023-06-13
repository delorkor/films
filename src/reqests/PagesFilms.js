import axios from "axios";
export const PagesFilms = async () => {
  const User = await axios.get(`https://diplom.loc/api/Films`);
  // console.log(User.data);
  return User.data;
};
