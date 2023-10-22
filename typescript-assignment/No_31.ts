//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty
let users1 : string[] = [
    // 'admin',
    // 'eric',
    // 'abdullah',
    // 'usman',
    // 'shayan'
]

// console.log(Array.isArray(users1))
// console.log(users1.length)

for(let a = 0; a<= users1.length; a++){
    if(users1.length == 0){
        console.log('We need to find some users')
        break;
    }

    if(users1[a] == 'admin'){
        console.log('Hello Admin, would you like to see status report')
    }
    else if(users1[a] == 'eric'){
        console.log('Hey Eric, for Logging in again')
    }
    else if(users1[a] == 'abdullah'){
        console.log('Hey Abdullah, for Logging in again')
    }
    else if(users1[a] == 'usman'){
        console.log('Hey Usman, for Logging in again')
    }
    else if(users1[a] == 'shayan'){
        console.log('Hey Shayan, for Logging in again')
    }
}