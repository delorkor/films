export const ButtonComp=(props)=>{

    return  <button onClick={props.onClick} className={props.className}>{props.children}</button>
}