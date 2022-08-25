import { useRouter } from "next/router"


export default function Home() {
  const router = useRouter()

  const button_style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    padding: "20px", 
    fontSize: "1.2em",
    color: "#fff",
    backgroundColor: "#11a2a2",
    border: "none", 
    borderRadius: "3px", 
  }
  
  return (
    <div>
      <button style={button_style} 
      onClick={()=>{router.push("/test/jobs")}}>Search a Job for You!</button>
    </div>
  )
}
