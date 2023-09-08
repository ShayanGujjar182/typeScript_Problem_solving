//City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

let city_countr = (city : string, country : string) : string => {
    return `"${city}, ${country}"`
}

console.log(city_countr('lahore', 'Pakistan'))
console.log(city_countr('Delhi', 'India'))
console.log(city_countr('jeddah', 'Saudi Arabia'))