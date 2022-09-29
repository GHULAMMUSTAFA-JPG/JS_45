

let list =  ["Ali","Ahmed","Asad","Amir","Arham"]

for(const i of list ){
    console.log(`"I would like ${i} to come at my home for dinner tomorrow."`)
}


console.log("Arham cannot come as he's busy")


// replace name in list
let index = list.indexOf("Arham") 
list.splice(index,1,"Musa")

for(const i of list ){
    console.log(`"I would like ${i} to come at my home for dinner tomorrow."`)
}
