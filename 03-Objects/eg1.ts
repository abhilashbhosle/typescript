// if a function returning the object then it should be represented as

function myObj():{}{
return {}
}
myObj()

// If we wanted the same keys needed to be return then

function myObj1():{name:string,email:string}{
    // return {id:'two',msg:'hello'}  this will throw error as the object keys are not same
    return {name:'abhi',email:'abhi@gmail'}
}


export {}