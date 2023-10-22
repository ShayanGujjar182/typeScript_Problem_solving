//Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:

let age : number = 66

if(age < 2){
    console.log('Person is baby')
}else if(age >= 2 && age < 4){
    console.log('Person is toddler')
}
else if(age >= 4 && age < 13){
    console.log('Person is kid')
}
else if(age >= 13 && age < 20){
    console.log('Person is teenager')
}
else if(age >= 20 && age < 65){
    console.log('Person is adult')
}
else if(age > 65){
    console.log('Person is elder')
}

