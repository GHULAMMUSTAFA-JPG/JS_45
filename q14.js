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

console.log("Sorry for the inconvinence , as table is not coming soon what we can do is we are degrading our list to only 2 people and the selected people we be informed")
console.log(list.length)
for(const i in list){
    let a
    if(list.length===2)
        break
    else
        a = list.pop()
        console.log(`Sorry cannot invite you Mr ${a} for tomorrow dinner.`)
}

for(const i of list){
    console.log(`Mr ${i} you are still invited to the dinner tomorrow night`)
}
console.log(`Removing last 2 element of list and the elements are ${list.splice(0,2,)}`)
console.log(`List has length of ${list.length}`)
console.log(list)


