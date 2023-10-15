// interfaces are similar to the classes,they are another way to name an object type.
// we can reopen the interface and invoke any method inside it
// interfaces also create inheritance

interface User1{
    readonly dbId:number, // readonly
    email:string,
    userId:string,
    googleId?:string //optional
    startTrail():string,
    getCoupon(couponname:string,value:number):number
}

const abhi:User1={
    dbId:1,
    email:'ab@ab.com',
    userId:'2233',
    startTrail:()=>{
        return 'trial started successfully'
    },
    getCoupon:(name:'ABHI10',off:10)=>{
        return 10
    }
}