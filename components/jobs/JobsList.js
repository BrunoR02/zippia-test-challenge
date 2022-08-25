import JobCard from "./JobCard"
import styles from "../../styles/jobs/JobsList.module.css"
import {activeJob} from "../../styles/jobs/JobCard.module.css"

export default function JobsList({activeId,setActive,list}){

  return (
    <div className={styles.list}>
      {list.map(job=>{
        return <JobCard key={job.id} jobData={job} onClickHandler={()=>{setActive(job.id)}}
        addClass={activeId === job.id ? activeJob : ""}/>
      })}
    </div>
  )
}