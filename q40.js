let magicians_names = ['Magician1','Magician2','Magician3']
show_magician = (arr) => {
    for(const i of arr)
        console.log(`${i}`)
}
show_magician(magicians_names)



console.log('Cloning array so that the original will be unchanged')



let magicians_names_clone= magicians_names.slice()
make_great = (magicians_names_array) =>{
    for(let i of magicians_names_array){
        i = i+"The Great"
        console.log(`${i}`)
    }
}
make_great(magicians_names_clone)

























//     arr.forEach((element, index) => {
//     arr[index] = element + "The Great";
// });





