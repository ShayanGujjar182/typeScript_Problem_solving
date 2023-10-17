#! /usr/bin/env node
import inquirer from "inquirer"




let userid : string = "id" + Math.random().toString().substring(2, 6)
let userpass : string = Math.random().toString().substring(2, 6)
console.log("id: " + userid, "Pin: " + userpass)
let answer = await inquirer.prompt([
    {
        name : 'id',
        type : 'string',
        message : 'Enter Your ID'
    },
    {
        name : 'password',
        type : 'string',
        message : 'Enter Your PIN'
    }
])


let balanace = 0;
const money = async() => {
if(answer["id"] == userid){
    if(answer["password"] == userpass){
        console.log(`Your Balance is : ${balanace}PKR`)
        let atm = await inquirer.prompt([
            {
                name : 'money',
                type : 'list',
                choices : ['depositmoney', 'withdrawmoney'],
                message : 'What You want to do in the ATM'
            }
        ])
        if(atm['money'] == 'depositmoney'){
            let deposit= await inquirer.prompt([
                {
                    name : 'money',
                    type : 'number',
                    message : 'Enter the amount to deposit'
                }
            ])
            balanace += deposit['money']
            console.log(` You have successfully deposited the balance of ${deposit['money']}  Your new balance is : ${balanace}`)

            money()

        }else if(atm['money'] == 'withdrawmoney'){
            let withdraw= await inquirer.prompt([
                {
                    name : 'money',
                    type : 'number',
                    message : 'Enter the amount to withdraw'
                }
            ])
            if(withdraw['money'] <= balanace){
                console.log(`You have successfully withdrawn Money of ${withdraw['money']}`)
                balanace -= withdraw['money']
                console.log(`Your remaining balance is ${balanace}`)
            }else{
                console.log('Sorry Balance is not Enough to withdraw')
            }

            money()
        }
    }
    
}else{
    console.log('Your answer password is Not correct')
}
}


money()