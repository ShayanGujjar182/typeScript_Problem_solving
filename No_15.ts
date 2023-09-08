//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

let guestList1 : string[] = [
    'farhan',
    'faryad',
    'amin'
]

guestList1[2] = 'ali'  // replace the name in the array with particular index

console.log(`hey ${guestList1[0]} i would like to invite you on dinner at my home`)
console.log(`hey ${guestList1[1]} i would like to invite you on dinner at my home`)
console.log(`hey ${guestList1[2]} i would like to invite you on dinner at my home`)

console.log('amin is Not able to attend the dinner so he is removed from the invitation list')