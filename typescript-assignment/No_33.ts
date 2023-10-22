//Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.

let numarr : number[] = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
]

for (let index = 0; index < numarr.length; index++) {
    if(numarr[index] == 1){
        console.log(numarr[index] + 'st')
    }
    else if(numarr[index] == 2){
        console.log(numarr[index] + 'nd')
    }
    else if(numarr[index] == 3){
        console.log(numarr[index] + 'rd')
    }
    else{
        console.log(numarr[index] + 'th')
    }
    
}