import { useContext, useEffect, useState } from "react"
import JobsContext from "../../store/jobsContext"
import styles from "../../styles/filter/CompanyFilter.module.css"
import { useRouter } from "next/router"

export default function CompanyFilter(){
  const router = useRouter()
  //Check if have query for the companyList as the component initialize, if yes get them as the initial active company names
  const [activeCompanies,setActiveCompanies] = useState(router.query.companyList ? JSON.parse(router.query.companyList) : [])

  let query = router.query
  

  //Get Company List from Context
  const {getCompanyList} = useContext(JobsContext) 
  let companyList = getCompanyList()

  useEffect(()=>{
    //Set Params to URL to send back to the jobList page and get the filtered companyNames
    if(activeCompanies.length!==0){
      //If working with the other query
      if(query.recent){
        router.push("?recent=" + query.recent + "&" + "companyList=" + JSON.stringify(activeCompanies))
      } else {
        router.push("?companyList=" + JSON.stringify(activeCompanies))
      }
    } else if(query.companyList){
      router.push("")
    }
  },[activeCompanies, query.recent, query.companyList, router])

  return (
    <div className={styles.dropdown}>
      <ul className={styles.list}>
        {companyList.map(companyName=>{
          return (
            <li key={companyName} className={styles.item}>
              <label>
                <input type="checkbox" value={companyName} checked={activeCompanies.some(name=>name===companyName)} onChange={(e)=>{
                  //If box is checked add to company List
                  if(e.target.checked){
                    setActiveCompanies(list=>[...list,e.target.value])
                  //If is already on the list, remove from it.
                  } else if(activeCompanies.some(name=>name===e.target.value)){
                    setActiveCompanies(list=>list.filter(name=>name!==e.target.value))
                  }
                  }}/>
                {companyName}
              </label>
            </li>
          )
        })}
      </ul>
        
    </div>
  )
}
