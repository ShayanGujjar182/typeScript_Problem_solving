//Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.


interface car {
    Manufacturer : string,
    Model_no : number,
    Color : string,
    SunRoof? : boolean
}
function carinfo(Manufacturer : string, Model_no : number, Color : string, SunRoof? : boolean): car{
  

    if(SunRoof){
        let obj : car = {
            Manufacturer : Manufacturer,
            Model_no : Model_no,
            Color : Color,
            SunRoof : SunRoof
        }
        return obj
    }else{
        let obj : car = {
            Manufacturer : Manufacturer,
            Model_no : Model_no,
            Color : Color
        }
        return obj
    }
}

console.log(carinfo('ali', 1920, 'green', true))
console.log(carinfo('abdullah', 2023, 'red'))