import { createBrowserRouter } from "react-router-dom";
import pagesRoutes from "./pagesRoutes";
import { ModalSignIn } from "./../pages/ModalSignIn/ModalSignIn";
import { Header } from "./../containers/Header/Header";
import { Main } from "./../pages/Main/Main";
import { MainGenre } from "./../pages/MainGenre/MainGenre";
import { AddFilms } from "./../pages/AddFilms/AddFilms";
import { Navigation } from "./../containers/Navigation/Navigation";
import { FilmPage } from "./../pages/FilmPage/FilmPage";
import { Slyder } from "../containers/Slyder/Slyder";
import style from "./../App.module.css";
import { date } from "yup";

const router = createBrowserRouter([
  {
    path: pagesRoutes.MAIN,
    element: (
      <>
        <Header />

        <div className={style.containers}>
          <div className={style.mainWrapper}>
            <Navigation />

            <Main />
          </div>
        </div>
      </>
    ),
  },
  {
    path: pagesRoutes.AUTH,
    element: <ModalSignIn />,
  },

  {
    path: pagesRoutes.MOVIE,
    element: (
      <>
        <Header />

        <div className={style.containers}>
          <div className={style.mainWrapper}>
            <Navigation />
            <AddFilms />
          </div>
        </div>
      </>
    ),
  },

  {
    path: pagesRoutes.MOVIE_PAGE + "/" + ":id",

    element: (
      <>
        <Header />

        <div className={style.containers}>
          <div className={style.mainWrapper}>
            <Navigation />

            <FilmPage />
          </div>

          <Slyder />
        </div>
      </>
    ),

    loader: ({ params }) => params.id,
  },

  {
    path: pagesRoutes.Genre + "/" + ":id",

    element: (
      <>
        <Header />

        <div className={style.containers}>
          <div className={style.mainWrapper}>
            <Navigation />

            <MainGenre />
          </div>
        </div>
      </>
    ),

    loader: ({ params }) => params.id,
  },
  {
    path: pagesRoutes.Cotegory + "/" + ":idCotegory",

    element: (
      <>
        <Header />

        <div className={style.containers}>
          <div className={style.mainWrapper}>
            <Navigation />

            <MainGenre />
          </div>
        </div>
      </>
    ),
    // location:
    // loader: ({ params }) => params.idCotegory,
  },
]);

export default router;
