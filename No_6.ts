//Shayan | 17/8/2023 | this program first added the spaces in the value of the variable then removed the spaces from starting

//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.


let myName : string= "      shayan      "
console.log("\t" + myName)
console.log(myName.trim())

let q6: string = "   Jahanzaib \n  Tayayb  \t Hy \t developer ";

console.log(q6);

//after trim
console.log(q6.trim());