import style from "./Slyder.module.css";
import { MovieBlock } from "../../containers/MovieBlock/MovieBlock";
import { Children, useEffect, useState } from "react";
import React from "react";
export const Slyder = () => {
  const [line, lineFunction] = useState(0);
  const sliderLine = React.createRef();

  const Left = () => {
    lineFunction((lineOffset) => {
      let newOffset = lineOffset + 304;
      console.log(newOffset);

      // if (newOffset >= maxLength) {
      //   newOffset = maxLength;
      // }
      if (newOffset >= 0) {
        newOffset = 0;
      }
      return newOffset;
    });
  };
  const Right = () => {
    lineFunction((lineOffset) => {
      let newOffset = lineOffset - 304;
      console.log(newOffset);
      const maxLength = -(4 * 304);
      if (newOffset <= maxLength) {
        newOffset = maxLength;
      }
      return newOffset;
    });
  };
  return (
    <>
      <div className={style.container}>
        <div onClick={Left} className={style.controlLeft}>
          {"<"}
        </div>
        <div className={style.wrapper}>
          <div
            className={style.wrapper_line}
            style={{ transform: `translateX(${line}px)` }}
          >
            <MovieBlock data={"e"} />
            <MovieBlock data={"e"} />
            <MovieBlock data={"e"} />
            <MovieBlock data={"e"} />
            <MovieBlock data={"e"} />
            <MovieBlock data={"e"} />
            <MovieBlock data={"e"} />
            <MovieBlock data={"e"} />
            <MovieBlock data={"e"} />
          </div>
        </div>
        <div className={style.controlRight} onClick={Right}>
          {">"}
        </div>
      </div>
    </>
  );
};
