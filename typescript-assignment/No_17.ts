//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

let guestList3 : string[] = [
    'farhan',
    'faryad',
    'amin'
]

guestList3[2] = 'ali'//the guest replaced who is not able to come


guestList3.unshift('shayan');  // Added to the starting of the array
guestList3.splice(3, 0, 'atif');  // added to middle of the array to the specific index
guestList3.push('usman')  //  added to the last of the array
// this was the previous array list that was invited

console.log('i am only able to Invite 2 people on Dinner')
console.log('---------------------------------------------')

while(guestList3.length > 2){
    console.log(`i am really sorry ${guestList3.pop()} , i am not able to invite you today for dinner`)
}
console.log('---------------------------------------------')
for (let index = 0; index < 2; index++) {
    console.log(` Hey ${guestList3[index]}, you are still invited on Dinner today`);
}

while(guestList3.length !== 0){
    guestList3.pop()
}

console.log(guestList3)
