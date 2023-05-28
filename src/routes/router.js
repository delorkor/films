// import createBrowserRouter from "react-router-dom"
// import {useState} from "react";

// import { ModalSignIn } from "./../pages/ModalSignIn/ModalSignIn";
// import { Header } from "./../containers/Header/Header";
// import { Main } from "./../pages/Main/Main";
// import { ModalFilter } from "./../containers/ModalFilter/ModalFilter";
// import { Navigation } from "./../containers/Navigation/Navigation";

// import style from "./../App.module.css"



// const[modalActiv,modalActivFunction]=useState(false)
// const[modalActivSignIn,modalActivSignInFunction]=useState(false)
// const[modalActivSignUp,modalActivSignUpFunction]=useState(false)
// const includeModal=(e)=>{
//   e.preventDefault()
//   console.log('aaaa')
//   modalActivFunction(!modalActiv)
// }

// const includeModalSignIn=(e)=>{
//   e.preventDefault()
//   console.log('aaaa')
//   modalActivSignInFunction(!modalActivSignIn)
// }





// const router = createBrowserRouter([
//     {
//       path: "/",
//       element: (
//       <>
//          <ModalSignIn
//       modalActivSignIn={modalActivSignIn}
//       modalActivSignUp={modalActivSignUp}
//       modalActivSignUpFunction={modalActivSignUpFunction}
//       />

      
//      <ModalFilter
//      modalActiv={modalActiv}
//      includeModal={includeModal}
//       classes={[style.ModalFilterActiv,style.ModalFilter]}/>
//      <Header
//      includeModal={includeModal}
//      includeModalSignIn={includeModalSignIn}
//      />
//      <div className="main">
//       <div className={style.containers}>
//         <div className={style.mainWrapper}>
//      <Navigation/>
//      <Main/>
//      </div>
//      </div>
//      </div>
      
//       </>),
//       children: [
//         {
//           path: "/auth",
//           element: <ModalSignIn />,
//         },
       
//       ],
//     },
//   ]);

//   export default router