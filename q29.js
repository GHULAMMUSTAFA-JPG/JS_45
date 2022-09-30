let current_usernames = ['Admin','NegativeBoy','WitchMan','Dexter','Albert']

let new_users = ['ADMIN','NegativeBoy','WitchMan', 'AlphaBoy','Pegion','Holly']

// let new_current_array = current_usernames.slice()

const new_current_array = [...current_usernames] //ES6 way of cloning a array
const new_users_array = [...new_users]
function lower(Array){
    const lower =Array.map(element => {
        return element.toLowerCase()
    })
}

const lower_new_current_array = new_current_array.map(element => {
  return element.toLowerCase();
})
console.log(lower_new_current_array)
const lower_new_users_array = new_users_array.map(element => {
  return element.toLowerCase();
})
console.log(lower_new_users_array)


let difference= lower_new_users_array.filter(x => !lower_new_current_array.includes(x))
for(const i of difference){
    console.log(`Username ${i} has not been used`)
}
















//Important

// Array.prototype.diff = function(arr2) { return this.filter(x => !arr2.includes(x)); }
// [1, 2, 3].diff([2, 3])



// const sheeps = ['🐑', '🐑', '🐑'];
// // Old way
// const cloneSheeps = sheeps.slice();

// // ES6 way
// const cloneSheepsES6 = [...sheeps];


// const arr = ['ONE', 'TWO', 'THREE'];

// const lower = arr.map(element => {
//   return element.toLowerCase();
// });

// console.log(lower); // 👉️ ['one', 'two', 'three']
















