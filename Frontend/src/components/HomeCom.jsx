import styles from "../CSS/HomeCom.module.css"
import { Link } from "react-router-dom"

export default function HomeCom() {
  return (
    <>
    <div className={styles.set}>
        <div className={styles.body}>Welcom to the Home page</div>
    </div>
    <div>
<Link to="/dashboard">
Dashboar</Link>
    </div>
    </>

  )
}
