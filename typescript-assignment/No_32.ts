//Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
let current_users : string[] = [
    'ADMin',
    'ali',
    'abdullah',
    'akhtar',
    'amin'
]

let new_users : string[] = [
    'admin',
    'suleman',
    'ayesha',
    'areeba',
    'AKHTAR'
]

for (let index = 0; index < new_users.length; index++) {
    for (let j = 0; j < current_users.length; j++) {
        if(new_users[index].toLowerCase() == current_users[j].toLowerCase()){
            console.log(`You cannot use this Username ${new_users[index]}`)
            break;
        }
        
    }
    
}