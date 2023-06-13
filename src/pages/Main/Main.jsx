import styles from "./Main.module.css";
import { Navigation } from "../../containers/Navigation/Navigation";
import { MovieBlock } from "../../containers/MovieBlock/MovieBlock";
import { PagesFilms } from "../../reqests/PagesFilms";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilms } from "../../store/features/FilmsSlice";
export const Main = () => {
  // const [filmsState, filmsCreate] = useState([]);
  const films = useSelector((state) => state.films.data);
  const dispatch = useDispatch();

  const dataFilms = async () => {
    const films = await PagesFilms();

    // localStorage.setItem("films", JSON.stringify(films));
    // const allFilms = JSON.parse(localStorage.getItem("films"));
    dispatch(setFilms(films));
  };
  useEffect(() => {
    dataFilms();
  }, []);
  console.log(films);
  return (
    <div className={styles.Main}>
      {/* {films?.data.map((e) => {
        console.log(e);
      })} */}
    </div>
  );
};
