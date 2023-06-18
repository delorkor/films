import styles from "./Main.module.css";
import { Navigation } from "../../containers/Navigation/Navigation";
import { MovieBlock } from "../../containers/MovieBlock/MovieBlock";
import { PagesFilms } from "../../reqests/PagesFilms";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilms } from "../../store/features/FilmsSlice";
import { Link } from "../../components/Link/Link";

export const Main = () => {
  const [pageNum, pageNumFunction] = useState("");
  const films = useSelector((state) => state.films.data);
  const dispatch = useDispatch();

  const urlPage = async (e) => {
    console.log(e.target.textContent);
    await PagesFilms(e.target.textContent);
  };
  const dataFilms = async (page) => {
    const films = await PagesFilms(page);
    // const films = await PagesFilms(page);
    // console.log(films);

    dispatch(setFilms(films));
  };
  useEffect(() => {
    dataFilms();
  }, []);

  return (
    <div className={styles.Main}>
      <div className={styles.content}>
        {films &&
          films.data.map((e) => {
            return <MovieBlock key={e.id} data={e} />;
          })}
      </div>

      <div className={styles.pagenation}>
        {films &&
          films.links.map((e, index) => {
            console.log(e);
            return (
              <Link
                key={index}
                onClick={() => {
                  dataFilms(e.url);
                }}
                className={styles.PagenationLink}
              >
                {e.label}
              </Link>
            );
          })}
      </div>
    </div>
  );
};
