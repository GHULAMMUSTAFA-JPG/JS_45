array_to_Object = array => {
  let obj = {}
  for (let i = 0; i < array.length; ++i)
    if (array[i] !== undefined) obj[i] = array[i]
  return obj
}

console.log(array_to_Object(['Honda','City']))

console.log(array_to_Object(['Honda','City','Red']))










































// a= (manufacturer_name,car_name) =>{
//     let car={
//         manufacturer_name : manufacturer_name , 
//         car_name : car_name
//     }
//     return car
// }


// console.log(a('Honda',"City"))
// console.log(a('Honda',"City",'Black'))






