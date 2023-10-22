//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

let guestList2 : string[] = [
    'farhan',
    'faryad',
    'amin'
]

guestList2[2] = 'ali'//the guest replaced who is not able to come


guestList2.unshift('shayan');  // Added to the starting of the array
guestList2.splice(3, 0, 'atif');  // added to middle of the array to the specific index
guestList2.push('usman')  //  added to the last of the array

for (let index = 0; index < guestList2.length; index++) {
    console.log(`hey ${guestList2[index]} i would like to invite you on dinner at my home`)
}
console.log(guestList2.length)
console.log('-------------------------------------------------------------------')
console.log('informing you All that i found a bigger table for the dinner that\'s why we are inviting more friend')
console.log('-------------------------------------------------------------------')
console.log('amin is Not able to attend the dinner so he is removed from the invitation list')