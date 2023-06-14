import style from "./MovieBlock.module.css";
import img from "../../img/1.jpg";

export const MovieBlock = ({ data }) => {
  return (
    <div className={style.MovieBlock}>
      <div className={style.BoxImg}>
        <img
          className={style.img}
          src={"http://diplom.loc/storage/" + data.name_img_film && img}
          alt=""
        />
      </div>
      <div className={style.name}>{data.name}</div>
      <div className={style.cotegory}>movie</div>
    </div>
  );
};
