// reoprning of the interface
// inheritance in interface (extends)

interface User{
    readonly dbId:number, // readonly
    email:string,
    userId:string,
    googleId?:string //optional
    startTrail():string,
    getCoupon(couponname:string,value:number):number
}
interface User{
    githubToken:string //reopening of interface
}
interface Admin extends User{
    role:'admin'|'learner' //inheritance in interface
}

const abhilash:Admin={
    dbId:1,
    email:'ab@ab.com',
    role:'admin',
    userId:'2233',
    githubToken:'ytrsvyt',
    startTrail:()=>{
        return 'trial started successfully'
    },
    getCoupon:(name:'ABHI10',off:10)=>{
        return 10
    }
}