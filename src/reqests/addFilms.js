import axios from "axios";

export const addFilms = async (data) => {
  const token = JSON.parse(localStorage.getItem("access_token"));
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const Films = await axios.post(
    "https://diplom.loc/api/add/Films",
    data,
    config
  );
  return Films;
};
