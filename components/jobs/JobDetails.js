import CalculateDateBetween from "../../helpers/CalculateDateBetween"
import styles from "../../styles/jobs/JobDetails.module.css"

export default function JobDetails({data,onCloseMobile}){
  
  let postedDate = CalculateDateBetween(data.createdAt)

  //CloseMobile => Show a button when it is mobile to close it, where the JobDetails component becomes a fixed block on top.

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{data.title}</h2>
      <button onClick={onCloseMobile} className={styles.closeMobile}></button>
      <section className={styles.info}>
        <span className={styles.companyName}>{data.companyName}</span>
        <span className={styles.location}>{data.location}</span>
        <span className={styles.postedDate}>{postedDate}</span>
      </section>
      <section className={styles.description}>
        <h4 className={styles.subtitle}>Job Description</h4>
        <p className={styles.text}>{data.description}</p>
      </section>
    </div>
  )
}