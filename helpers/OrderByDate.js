export default function OrderByDate(list){

  let orderedList = list.sort((a,b)=>{
    return new Date(b.createdAt) - new Date(a.createdAt)
  })

  return orderedList
}