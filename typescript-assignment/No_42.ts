//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

let magician_ : string[] = [
    'Abdul Magician',
    'Tricky Magician',
    'Farhan Magician',
    'Wise Magician'
]

function make_great(array : string[]) {
    for (let i = 0; i < array.length; i++) {
        magician_[i] = 'Great ' + magician_[i]
        
    }
}

make_great(magician_);

function show_magicians_(array : string[]){
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}
show_magicians_(magician_)