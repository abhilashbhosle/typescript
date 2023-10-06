//Unions are basically meant to show the variable can be any of the type 

// variables
let score:number|string=33
score='33'

let pi:1.34=1.34
// pi=1.25 this throws error

//typealiases
type User={
    name:string,
    id:number
}
type Admin={
    username:string,
    access:string
}

let Role:User|Admin={
    name:'abhi',
    id:1234
}
Role={
    username:'ab',
    access:'doall'
}

//arrays
const data:number[]=[1,2,3,4]
const data1:(number | string | boolean)[]=[1,2,'abhi',true]

