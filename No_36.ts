//T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

const tshirt =(size : string | number, message : string)=>{
    console.log(`'${message}' would print on '${size}' size shirt`)
} 
tshirt(42, 'i am Gangster')