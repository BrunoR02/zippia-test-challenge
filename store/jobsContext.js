import { createContext, useState } from "react";

const JobsContext = createContext({
  jobsList: [],
  setJobList: () =>{},
  getCompanyNames: ()=>{}
})

export function JobsContextProvider({children}){
  const [jobsList,setJobsList] = useState([])

  function getCompanyList(){
    let initialList = jobsList.map(job=>job.companyName)
    //Get Unique names only
    let uniqueList = [...new Set(initialList)]

    return uniqueList
  }

  const context = {
    jobsList,
    storeJobsList: (list) => {setJobsList(list)},
    getCompanyList,
  }

  return(
    <JobsContext.Provider value={context}>
      {children}
    </JobsContext.Provider>
  )
}

export default JobsContext;

