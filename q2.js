
let personName = 'Ghulam Mustafa'

// case1

let Name = personName.toLowerCase()
console.log(Name)

// case2

Name=personName.toUpperCase()
console.log(Name)



// case3

Name = personName.toLowerCase().split(" ")

const titlecase = (Name) => {

    for(const index in Name){
        Name[index]=Name[index].charAt(0).toUpperCase()+Name[index].slice(1)
    }
    console.log( Name.join(' ') )

}

titlecase(Name)