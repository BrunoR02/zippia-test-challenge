import { createContext, useCallback, useState } from "react";

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

  const storeJobsList = useCallback((list) => {setJobsList(list)},[])

  const context = {
    jobsList,
    storeJobsList,
    getCompanyList,
  }

  return(
    <JobsContext.Provider value={context}>
      {children}
    </JobsContext.Provider>
  )
}

export default JobsContext;

