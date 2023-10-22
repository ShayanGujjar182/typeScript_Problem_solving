//Seeing the World: Think of at least five places in the world you’d like to visit.

let locationarr : string[] = [
    "maldives",
    "america",
    "germany",
    "london",
    "newYork"
]

console.log(locationarr)
console.log('-------------------------------------------')
console.log([...locationarr].sort() + '---------------------- sorted array')
console.log('-------------------------------------------')
console.log(locationarr + '--------------- orignal array')
console.log('-------------------------------------------')
console.log([...locationarr].sort().reverse() + '----------- array reversed of sorted array')
console.log('-------------------------------------------')
console.log(locationarr + '--------------- orignal array')
console.log('-------------------------------------------')
console.log(locationarr.reverse() + '------------- orignal array reversed')
console.log('-------------------------------------------')
console.log(locationarr + '------------- showing that orignal array is reversed')
console.log('-------------------------------------------')
console.log(locationarr.reverse() + '--------------- orignal array reversed Again')
console.log('-------------------------------------------')
console.log(locationarr + '-------------- showing that orignal array is reversed and back to orignal')
console.log('-------------------------------------------')
locationarr.sort()
console.log(locationarr)
locationarr.reverse()
console.log(locationarr)



