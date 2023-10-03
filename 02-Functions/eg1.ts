function addNum(num:number){ // if the function expecting only number as an argument so strictly mention the type to number
    return num+2
}

function upperCase(anything:string){
    return anything.toUpperCase()
}

function signUpUser(name:string,email:string,isPaid:boolean){}

let loginUser=(name:string,email:string,isPaid:boolean=false)=>{}

signUpUser('abhilash','abhi@mail.com',false)
upperCase('abhilash')
addNum(4)
loginUser("abhi","abhi@ab.com")

export{}