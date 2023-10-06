// there are two ways to declare the type for array
let superHeros:string[]=[] // 1st way
let power:Array<number>=[] // 2nd way
superHeros.push('Hanuman')
power.push(2)

type User={
    name:'abhi',
    isACtive:true
}
let createUser:User[]=[]
createUser.push({name:'abhi',isACtive:true})

export{}