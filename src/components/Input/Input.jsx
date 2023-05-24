import { forwardRef } from "react";

export const Input=forwardRef(
(props,ref)=>{

    return( <input className={props.className}
           placeholder={props.placeholder} 
           value={props.value}
           {...props}
           ref={ref}
           type={props.type} />)
})