//Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
let favourite_fruits : string[] = [
    'bnana',
    'mango',
    'orange'
]


for(let a = 0; a < favourite_fruits.length; a++){
    if(favourite_fruits[a] == 'bnana'){
        console.log('You really Like bnanas')
    }else if(favourite_fruits[a] == 'apple'){
        console.log('You really like apples')
    
    }else if(favourite_fruits[a] == 'mango'){
        console.log('You really like mango')
    
    }else if(favourite_fruits[a] == 'appricoat'){
        console.log('You really like appricoat')
    
    }else if(favourite_fruits[a] == 'orange'){
        console.log('You really like orange')
    }
}
