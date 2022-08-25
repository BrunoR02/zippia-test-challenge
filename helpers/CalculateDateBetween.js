export default function CalculateDateBetween(date){
  // Get Date Objects
  const jobDate = new Date(date)
  const currentDate = new Date()

  let dateBetween;
  
  //Calculate readable time to return to the client to know when the job was posted. Example: 2 days ago, 4 hours ago.
  if(currentDate.getMonth() === jobDate.getMonth()){
    if(currentDate.getDate() === jobDate.getDate()){
      if(currentDate.getHours() === jobDate.getHours()){
        dateBetween = currentDate.getMinutes() - jobDate.getMinutes() + " minutes ago"
      } else {
        dateBetween = currentDate.getHours() - jobDate.getHours() + " hours ago"
      }
    } else {
      dateBetween = currentDate.getDate() - jobDate.getDate() + " days ago"
    }
  } else {
    dateBetween = currentDate.getMonth() - jobDate.getMonth() + " months ago"
  }

  return dateBetween
}