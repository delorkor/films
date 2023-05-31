import {createBrowserRouter,} from "react-router-dom";
import {useState} from "react";
import pagesRoutes from "./pagesRoutes";
import { ModalSignIn } from "./../pages/ModalSignIn/ModalSignIn";
import { Header } from "./../containers/Header/Header";
import { Main } from "./../pages/Main/Main";
import { AddFilms } from "./../pages/AddFilms/AddFilms";
import { Navigation } from "./../containers/Navigation/Navigation";

import style from "./../App.module.css"


const router = createBrowserRouter([
    {
      path: pagesRoutes.MAIN,
      element: (
      <>
    
  
     <Header />
    
      <div className={style.containers}>
        <div className={style.mainWrapper}>
     <Navigation/>
     <Main/>
     </div>
     </div>
    
      </>),
   
    },
    {
      path:  pagesRoutes.AUTH,
      element: <ModalSignIn />,
    },

    {
      path: pagesRoutes.MOVIE,
      element: (
      <>
    
  
     <Header />
    
      <div className={style.containers}>
        <div className={style.mainWrapper}>
     <Navigation/>
     <AddFilms/>
     </div>
     </div>
    
      </>),
   
    },
  ]);

  export default router