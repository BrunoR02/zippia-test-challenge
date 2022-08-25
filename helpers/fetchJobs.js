export default async function fetchJobs(requestBody){

  const response = await fetch("http://localhost:3000/api/jobs/",{
    method: "POST",
    body: JSON.stringify(requestBody),
    headers: {
      "Content-Type": "application/json"
    }
  })

  let jobList; 

  try{
    jobList = await response.json()
  } catch(error){
    console.log(error)
  }

  return jobList
}