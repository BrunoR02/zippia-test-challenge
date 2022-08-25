
export default async function fetchJobs(requestBody){
  const URL = "https://zippia-test-challenge.vercel.app" // LOCAL: http://localhost:3000

  const response = await fetch(URL + "/api/jobs/",{
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