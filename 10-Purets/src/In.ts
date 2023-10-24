// basically 'in' is used to check whether a value is present or not in the interface

interface User{
    nameOfUser:string
    email:string
}
interface Admin{
    name:string
    email:string
    isAdmin:boolean
}

function isAdminAccount(account:User|Admin){
    if("isAdmin" in account){
        return true
    }
    return false
}