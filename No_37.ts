//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

const tshirts = (size : string | number = 'large') =>{
    if(size == 'large'){
        console.log(`'i love typescript' would print on '${size}' size shirt`)
    }
    else if(size == 'medium'){
        console.log(`'i love javascript' would print on '${size}' size shirt`)
    }
    else{
        console.log(`'i love to work on WEb3' would print on '${size}' size shirt`)
    }

}

tshirts()
tshirts('medium')
tshirts('small')