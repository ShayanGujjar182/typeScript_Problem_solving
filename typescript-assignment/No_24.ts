//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

//Tests for equality and inequality with strings
let namez : string = 'ali'
console.log(namez == 'ali' )
console.log(namez != 'amina' )

console.log(namez != 'ali'  )
console.log(namez == 'amina' )

//Tests using the lower case function

let mine : string = 'ShaYaN'
console.log(mine.toLowerCase() == 'shayan')
console.log(mine.toLowerCase() != 'shayan')

//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log((4 == 4) + ' equality')
console.log((4 != 4) + ' inquality')
console.log((4 < 4) + ' less than')
console.log((4 > 4) + ' greater than')
console.log((4 <= 4) + ' less than Equals to')
console.log((4 >= 4) + ' greater than Equals to')

//Tests using "and" and "or" operators
console.log((3 + 3 == 6 && 4 + 4 == 8) + ' And operator')
console.log((3 + 3 == 6 && 4 + 3 == 8) + ' And operator')
console.log((3 + 3 == 6 || 4 + 3 == 8) + ' Or operator')
console.log((3 + 2 == 6 || 4 + 3 == 8) + ' Or operator')

//Test whether an item is in a array
let countries : string[] = ['maldives', 'srilanka' , 'Saudi Arabia']
console.log(Array.isArray(countries))
console.log(!Array.isArray(countries))


//Test whether an item is not in a array
let country : string = 'newarea'
console.log(Array.isArray(country))
console.log(!Array.isArray(country))