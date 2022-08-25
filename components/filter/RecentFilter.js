import { useEffect, useState } from "react"
import { useRouter } from "next/router"

import styles from "../../styles/filter/RecentFilter.module.css"

export default function RecentFilter(){
  const [isRecent,setIsRecent] = useState(false)
  const router = useRouter()

  let query = router.query


  useEffect(()=>{
    //Set Params to URL to send back to the jobList page and get the filtered companyNames
    if(isRecent) {
      //If working with the other query
      if(query.companyList){
        router.push("?companyList=" + query.companyList + "&" + "recent=" +"true")
      } else {
        router.push("?recent=" +"true")
      }
    } else {
      if(query.companyList){
        router.push("?companyList=" + query.companyList)
      } else {
        router.push("")
      }
      
    }
  },[isRecent, query.companyList, query.recent, router])

  return (
    <select className={styles.select} name="Date" id="date" onChange={(e)=>setIsRecent(!!parseInt(e.target.value))}>
      <option value="0">All Time</option>
      <option value="1">Recent Jobs</option>
    </select>
  )
}