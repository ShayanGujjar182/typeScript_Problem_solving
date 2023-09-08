//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.


let sandwich_ingridients : string[] = [
    'salad ',
    'pepper ',
    'egg ',
    'bread '
]
function sandwich(array : string[]){
    let summary : string = ''
    for (let i = 0; i < array.length; i++) {
        if(i <= array.length - 2){
            summary = summary.concat(array[i] + ' and ')
        }else{
            summary = summary.concat(array[i])
        }
        
        
    }
    return summary
}

console.log(sandwich(sandwich_ingridients))
console.log(sandwich(['mayoni', 'bandgobi', 'cauliflowe', 'buns', 'coldrink', 'tiki']))
console.log(sandwich(['mayoni', 'bandgobi', 'cauliflowe', 'buns', 'coldrink', 'tiki', 'taste', 'chicken']))