import { forwardRef } from "react";

export const ButtonComp = forwardRef((props, ref) => {
  return (
    <button onClick={props.onClick} className={props.className} ref={ref}>
      {props.children}
    </button>
  );
});
