import { Link } from "../../components/Link/Link"
import style from "./Navigation.module.css"
export const Navigation=()=>{

    return(
        <nav className={style.Navigation}>
          <ul className={style.ListNavi}>
          <li ><Link className={style.Linknavigation}>Home</Link> </li > 
          <li ><Link className={style.Linknavigation}>Trends</Link> </li > 
          <li ><Link className={style.Linknavigation}>Favorites</Link> </li > 
          <li ><Link className={style.Linknavigation}>Settings</Link> </li > 
          </ul>
        </nav>
      
    )
}