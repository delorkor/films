import { Link } from "../../components/Link/Link";
import style from "./Navigation.module.css";
import { Input } from "../../components/Input/Input";
import { useState, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import pagesRoutes from "../../routes/pagesRoutes";
import { ButtonComp } from "../../components/ButtonComp/ButtonComp";

export const Navigation = () => {
  const navigate = useNavigate();
  const [setFiles, setFilesFunction] = useState(null);
  const filePicker = useRef(null);
  const hendlerChange = (e) => {
    console.log(e.target.files);
    setFilesFunction(e.target.files[0]);
  };

  const hendlerUpload = async () => {
    const form = new FormData();
    console.log(form);
    form.append("films", setFiles);
    // console.log(form.get("films"))
    // console.log(form)
    const res = await fetch("https://diplom.loc/api/add/Films", {
      method: "POST",
      body: form,
    });

    const data = await res.json();
  };

  const downloadFile = () => {
    filePicker.current.click();
  };
  const exit = (e) => {
    e.preventDefault();
    delete localStorage.user;
    navigate(pagesRoutes.MAIN);
  };

  return (
    <nav className={style.Navigation}>
      <ul className={style.ListNavi}>
        <li>
          <Link className={style.Linknavigation}>Home</Link>
        </li>
        <li>
          <Link className={style.Linknavigation}>Trends</Link>
        </li>
        <li>
          <Link className={style.Linknavigation}>Favorites</Link>
        </li>
        <li>
          <Link className={style.Linknavigation}>Settings</Link>
        </li>
        <li>
          <NavLink to={pagesRoutes.MOVIE} className={style.Linknavigation}>
            add a movie
          </NavLink>
        </li>
        <li>
          <Link className={style.Linknavigation} onClick={exit}>
            exit
          </Link>
        </li>
        {/* <li>
          <input type="file" ref={filePicker} onChange={hendlerChange} />
          file
        </li>
        <li>
          <button onClick={downloadFile}> file download</button>
        </li>
        <li>
          <button onClick={hendlerUpload}>download</button>
        </li> */}
      </ul>
    </nav>
  );
};
