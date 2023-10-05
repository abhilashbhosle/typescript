//-----------READONLY,OPTIONAL &----------------//

// If read only is assigned to any variable we can't update it.
// if optional key '?' is assigned to any variable it is considered as optional to pass
// & is used to combine i.e, combining all the types as shown below

type User={
   readonly _id:string, // made as read only
    name:string,
    email:string,
    isActive:boolean,
    creditCardDetails?:number //optiomal
}

let createUser:User={
    _id:'098765',
    name:'a',
    email:'a@a.com',
    isActive:true
}

// createUser._id='7676' not allowed as allowed as it is readonly

type cardNumber={
    cardnum:string
}
type cardName={
    name:string
}

type cardDetails=cardName & cardName & {cvv:number} // use & to combine