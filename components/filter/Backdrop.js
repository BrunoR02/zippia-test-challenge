import styles from "../../styles/filter/Backdrop.module.css"

export default function Backdrop({onClickHandler}){
  return (
    <div onClick={onClickHandler} className={styles.backdrop}></div>
  )
}