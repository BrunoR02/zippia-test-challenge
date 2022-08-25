import DUMMY_LIST from "../../helpers/DummyList";

export default function handler(req,res){
  if(req.method === "POST"){
    const {numJobs,companyList, recentJobs} = req.body

    let originalList = DUMMY_LIST
    //List who will be filtered
    let filteredList = DUMMY_LIST

    //Filter by company names
    if(companyList){
      filteredList = filteredList.filter(job=>{
        return companyList.some(companyName=>companyName===job.companyName)
      })
    }

    if(recentJobs){
      filteredList = filteredList.filter(job=>{
        const currentDate = new Date()
        const jobDate = new Date(job.createdAt)
        //Check if the jobDate is inside the 7 days interval to return recent jobs, also it has to be on the same month.
        if((currentDate.getMonth() === jobDate.getMonth()) && (currentDate.getDate() - jobDate.getDate() < 8)){
          return true
        }
        return false
      })
    }
    //If a num of Jobs was included on req body, filter, if not it will get all jobs.
    if(numJobs){
      filteredList = filteredList.slice(0,numJobs)
    }
    
    let lists = {originalList,filteredList}

    res.status(200).json(lists)
  }
}