let magicians_names = ['Magician1','Magician2','Magician3']
show_magician = (arr) => {
    for(const i of arr)
        console.log(`${i}`)
}
show_magician(magicians_names)

make_great = (magicians_names_array) =>{
    for(let i of magicians_names_array){
        i = i+"The Great"
        console.log(`${i}`)
    }
}
make_great(magicians_names)

























//     arr.forEach((element, index) => {
//     arr[index] = element + "The Great";
// });





