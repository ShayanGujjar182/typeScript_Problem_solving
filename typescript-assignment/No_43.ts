//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.


let Magician : string[] = [
    'Abdul Magician',
    'Tricky Magician',
    'Farhan Magician',
    'Wise Magician'
]
let New_magician : string[] = []

function make_great_(array : string[]) {
    for (let i = 0; i < array.length; i++) {
        New_magician.push('Great ' + Magician[i])
        
    }
}

make_great_(Magician);

function show_magicians__(array : string[]){
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}
show_magicians__(Magician)
show_magicians__(New_magician)