import { useContext, useEffect, useState } from "react";
import FilterTab from "../../components/filter/FilterTab";

import JobDetails from "../../components/jobs/JobDetails";
import JobsList from "../../components/jobs/JobsList";
import fetchJobs from "../../helpers/fetchJobs";
import JobsContext from "../../store/jobsContext";

import styles from "../../styles/Home.module.css"

export default function JobsPage({originalList,filteredList}){
  const [active, setActive] = useState(0)
  const {storeJobsList} = useContext(JobsContext)

  useEffect(()=>{
    //Store List for further use on React Context
    storeJobsList(originalList)
  },[originalList,storeJobsList])

  return (
    <>
      <FilterTab/>
      <div className={styles.container}>
        <JobsList activeId={active} setActive={(id)=>{setActive(id)}} list={filteredList}/>
        {(active !== 0) && <JobDetails data={originalList.find(item=>item.id===active)} onCloseMobile={()=>setActive(0)}/>}
      </div>
    </>
  )
}

export async function getServerSideProps({query}){

  let queryList;
  let queryRecent;

  if(query.companyList){
    queryList= JSON.parse(query.companyList)
  }

  if(query.recent){
    queryRecent= JSON.parse(query.recent)
  }

  //Get Job
  const requestBody = {
    numJobs: 10,
    companyList: queryList || null,
    recentJobs: queryRecent || null,
  }

  const {originalList,filteredList} = await fetchJobs(requestBody)

  return {
    props: {
      originalList,
      filteredList
    }
  }
}