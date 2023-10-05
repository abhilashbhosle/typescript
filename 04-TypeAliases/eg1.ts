// Type aliases are considered as the user defined types, for example whatever the modal
// we create and pass to the method it expects the values to be in that model itself.
// for example if there are more functions which expects the same model as input then type aliases can be used.
// Type aliases can also be useful to replace the inbuilt datatypes ;like string=>str

type User={
    name:string,
    email:string,
    isActive:boolean
}

function createUser(user:User):User{
    return {name:user.name,email:user.email,isActive:user.isActive}
}
createUser({name:'abhi',email:'abhi',isActive:true})

// type str=string
// type bool=boolean

export{}