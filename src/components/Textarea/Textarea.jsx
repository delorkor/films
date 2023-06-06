import { forwardRef } from "react";

export const Textarea = forwardRef(
  ({ type, rows, cols, className, ...rest }, ref) => {
    return (
      <textarea
        {...rest}
        type={type}
        className={className}
        cols={cols}
        rows={rows}
        ref={ref}
      ></textarea>
    );
  }
);
