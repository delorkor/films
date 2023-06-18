import style from "./Slyder.module.css";
import { MovieBlock } from "../../containers/MovieBlock/MovieBlock";
import { useState } from "react";
import React from "react";
export const Slyder = () => {
  const [line, lineFunction] = useState(0);
  const sliderLine = React.createRef();

  console.log(line);
  const Left = () => {
    const leftLine = sliderLine.current.style.Left;
    console.log(leftLine);
  };
  const Right = () => {};
  return (
    <>
      <div onClick={Left} className={style.container}>
        <div className={style.wrapper}>
          <div className={style.controlLeft}>{"<"}</div>
          <div className={style.wrapper_line} ref={sliderLine}>
            <MovieBlock data={"e"} />
            <MovieBlock data={"e"} />
            <MovieBlock data={"e"} />
            <MovieBlock data={"e"} />
            <MovieBlock data={"e"} />
            <MovieBlock data={"e"} />
          </div>
          <div className={style.controlRight} onClick={Right}>
            {">"}
          </div>
        </div>
      </div>
    </>
  );
};
