import CalculateDateBetween from "../../helpers/CalculateDateBetween"
import styles from "../../styles/jobs/JobCard.module.css"

export default function JobCard({jobData, onClickHandler,addClass}){
  
  let postedDate = CalculateDateBetween(jobData.createdAt)

  return (
    <div className={styles.jobCard + " " + addClass} onClick={onClickHandler}>
      <h3 className={styles.title}>{jobData.title}</h3>
      <span className={styles.companyName}>{jobData.companyName}</span>
      <p className={styles.jobDescription}>{jobData.description}
      </p>
      <span className={styles.postedDate}>{postedDate}</span>
    </div>
  )
}