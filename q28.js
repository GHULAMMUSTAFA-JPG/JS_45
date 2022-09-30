let userName = ['Admin','NegativeBoy','WitchMan','Dexter','Albert']

for(const i of userName){
    if(i === 'admin'){
        console.log("Hello admin, would you like to see a status report?")
    }else{
        console.log(` Hello ${i}, thank you for logging in again.`)
    }
}

console.log("Next question Solution")
userName.splice(0,9,)
if(userName.length === 0 ){
    console.log("We need to find some users")
}else{
    console.log("List of usernames is not empty")
}

