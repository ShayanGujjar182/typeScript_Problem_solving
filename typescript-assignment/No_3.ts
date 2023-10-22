//Shayan | 17/8/2023 | this program simple converting the first letter of the word to uppercase
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let name_1 : string = "shayan"
console.log(name_1.toLowerCase())
console.log(name_1.toUpperCase())
function totitle(str_ : string){
    let str1 = str_.split(' ').map((word_)=>{
       return word_.charAt(0).toUpperCase() + word_.slice(1)
    }).join(' ')
    return str1
}
console.log(totitle(name_1))