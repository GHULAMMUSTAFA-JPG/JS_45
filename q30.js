let numbers = [1,2,3,4,5,6,7,8,9]

for(const i of numbers){
    if(i < 4){
        console.log(`${i}rd`)
    }
    else if(i >= 4){
        console.log(`${i}th`)
    }
}