import axios from "axios";
export const addFilms = async (data) => {
  //   console.log(data);
  const Films = await fetch("https://diplom.loc/api/add/Films", {
    method: "POST",
    body: data,
  });

  const FilmsData = await Films.json();

  return FilmsData;
};
