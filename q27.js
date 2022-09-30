let userName = ['Admin','NegativeBoy','WitchMan','Dexter','Albert']

for(const i of userName){
    if(i === 'admin'){
        console.log("Hello admin, would you like to see a status report?")
    }else{
        console.log(` Hello ${i}, thank you for logging in again.`)
    }
}