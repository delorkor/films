import style from "./FilmPage.module.css";

import { useEffect, useState } from "react";
import { Slyder } from "../../containers/Slyder/Slyder";
import { useParams, useLoaderData } from "react-router-dom";

export const FilmPage = () => {
  const id = useLoaderData();
  console.log(id);

  const [pageNum, pageNumFunction] = useState("");
  // const films = useSelector((state) => state.films.data);
  // const dispatch = useDispatch();

  // const dataFilms = async (page) => {
  //   const films = await PagesFilms(page);
  // const films = await PagesFilms(page);
  // console.log(films);

  // dispatch(setFilms(films));
  // };
  // useEffect(() => {
  //   dataFilms();
  // }, []);

  return (
    <div className={style.FilmPage}>
      <div className={style.wrapper}>
        <div className={style.imgWrapper}>
          <div className={style.imgBlock}>
            <img className={style.img} src="" alt="" />
          </div>

          {/* <div className={style.blockLink}>


        </div> */}
        </div>

        <div className={style.descriptionFilm}>
          <h2>Wonder Woman: 1984</h2>
          <div className={style.tableContent}>
            <table>
              <tbody>
                <tr>
                  <td className={style.tableTd}>Released:</td>
                  <td className={style.tableTd}>2011</td>
                </tr>
                <tr>
                  <td className={style.tableTd}>ganre:</td>
                  <td className={style.tableTd}>horor</td>
                </tr>
                <tr>
                  <td className={style.tableTd}>category:</td>
                  <td className={style.tableTd}>films</td>
                </tr>
              </tbody>
            </table>
            <div className={style.descr}>
              In 1984, after saving the world in Wonder Woman (2017), the
              immortal Amazon warrior, Princess Diana of Themyscira, finds
              herself trying to stay under the radar, working as an
              archaeologist at the Smithsonian Museum. With the memory of the
              brave U.S. pilot, Captain Steve Trevor, etched on her mind, Diana
              Prince becomes embroiled in a sinister conspiracy of global
              proportions when a transparent, golden-yellow citrine gemstone
              catches the eye of the power-hungry entrepreneur, Maxwell Lord.{" "}
            </div>
            <div className={style.wideowrapper}>
              <video className={style.wideo} controls src="">
                <source src="" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
