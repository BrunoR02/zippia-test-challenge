import { useState } from "react";
import CompanyFilter from "./CompanyFilter";

import styles from "../../styles/filter/FilterTab.module.css"
import Backdrop from "./Backdrop";
import RecentFilter from "./RecentFilter";

export default function FilterTab(){
  const [showCompany,setShowCompany] = useState(false)
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={()=>setShowCompany(state=>!state)}>Company</button>
      {showCompany && <CompanyFilter/>}
      {showCompany && <Backdrop onClickHandler={()=>setShowCompany(false)}/>}
      <RecentFilter/>
    </div>
  )
}