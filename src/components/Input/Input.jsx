import { forwardRef } from "react";
import style from "./input.module.css";
export const Input = forwardRef(
  (
    { className, placeholder, value, type, error, styleError, ...rest },
    ref
  ) => {
    return (
      <>
        <input
          data-date-format="YYYY-MMMM-DD"
          className={className}
          placeholder={placeholder}
          value={value}
          {...rest}
          ref={ref}
          type={type}

          // onChange={onChange}
        />
        {error && <span className={style.styleError}>{error}</span>}
      </>
    );
  }
);
