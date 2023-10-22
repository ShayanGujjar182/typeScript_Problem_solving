//this is from Ex 16
//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

let guestList5 : string[] = [
    'farhan',
    'faryad',
    'amin'
]

guestList5[2] = 'ali'//the guest replaced who is not able to come


guestList5.unshift('shayan');  // Added to the starting of the array
guestList5.splice(3, 0, 'atif');  // added to middle of the array to the specific index
guestList5.push('usman')  //  added to the last of the array

console.log(`Number of People inviting to the Dinner are ${guestList5.length}`)