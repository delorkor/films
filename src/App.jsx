import {useState} from "react";

import { ModalSignIn } from "./pages/ModalSignIn/ModalSignIn";
import { Header } from "./containers/Header/Header";
import { Main } from "./pages/Main/Main";
import { ModalFilter } from "./containers/ModalFilter/ModalFilter";
import { Navigation } from "./containers/Navigation/Navigation";
import { RouterProvider } from "react-router-dom";
import style from "./App.module.css";
// import router from "./routes/router";

function App() {
  const[modalActiv,modalActivFunction]=useState(false)
  const[modalActivSignIn,modalActivSignInFunction]=useState(false)
  const[modalActivSignUp,modalActivSignUpFunction]=useState(false)
  const includeModal=(e)=>{
    e.preventDefault()
    console.log('aaaa')
    modalActivFunction(!modalActiv)
  }

  const includeModalSignIn=(e)=>{
    e.preventDefault()
    console.log('aaaa')
    modalActivSignInFunction(!modalActivSignIn)
  }

  return (
    <div className={style.App} >

{/* <RouterProvider router={router}/> */}

      <ModalSignIn
      modalActivSignIn={modalActivSignIn}
      modalActivSignUp={modalActivSignUp}
      modalActivSignUpFunction={modalActivSignUpFunction}
      />

      
     <ModalFilter
     modalActiv={modalActiv}
     includeModal={includeModal}
      classes={[style.ModalFilterActiv,style.ModalFilter]}/>
     <Header
     includeModal={includeModal}
     includeModalSignIn={includeModalSignIn}
     />
     <div className="main">
      <div className={style.containers}>
        <div className={style.mainWrapper}>
     <Navigation/>
     <Main/>
     </div>
     </div>
     </div>
    </div>
  );
}

export default App;
