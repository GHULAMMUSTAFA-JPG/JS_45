// extension of last problem as three more guest are coming



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

console.log("Hello friends I have found a bigger table so I invited more people to come for dinner")

list.unshift("Mustafa") // at the beginning
list.push("Tooba") // at the end
let rec = list.length // at the middle
rec = rec/2
list.splice(rec,0,"Abdullah")
for(const i of list ){
    console.log(`"I would like ${i} to come at my home for dinner tomorrow."`)
}