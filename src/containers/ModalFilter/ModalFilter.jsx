
import React from "react";
import { Link } from "../../components/Link/Link";
import style from "./ModalFilter.module.css"
export const ModalFilter=({classes,modalActiv,includeModal})=>{

    return( <div className={(modalActiv)?classes[0]: classes[1]} >
<div className={style.modalHeader}>
<div className={style.modalHeaderText}>filter</div>
<Link onClick={includeModal} className={style.modalHeaderExit}>x</Link>

</div>
    </div>)
}