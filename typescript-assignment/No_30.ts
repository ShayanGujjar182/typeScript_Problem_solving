//Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:

let users : string[] = [
    'admin',
    'eric',
    'abdullah',
    'usman',
    'shayan'
]

for(let a = 0; a< users.length; a++){

    if(users[a] == 'admin'){
        console.log('Hello Admin, would you like to see status report')
    }
    else if(users[a] == 'eric'){
        console.log('Hey Eric, for Logging in again')
    }
    else if(users[a] == 'abdullah'){
        console.log('Hey Abdullah, for Logging in again')
    }
    else if(users[a] == 'usman'){
        console.log('Hey Usman, for Logging in again')
    }
    else if(users[a] == 'shayan'){
        console.log('Hey Shayan, for Logging in again')
    }
}