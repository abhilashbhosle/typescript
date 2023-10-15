// private: if we assign private to any variable inside the class it can be accessible only inside the class itself.
// public: by default all the keys are public inside the class
// gettrs and setters : getters and setters are mainly design to access any private methods outside the class by adding any additional
//logic or restrictions.
// setters should not return anything **.
// protected keyword is used to access the variable in the class which is inherited through that class

class User{
    public email:string
    private name:string
    city:string='' //initializer must be there as it will not initialise when class is initialised as constructor
    constructor(email:string,name:string){
        this.email=email,
        this.name=name
    }
}
const abhi=new User('ab@ab.com','abhi')
abhi.city='Hyderabad'
// abhi.name not accessible as it is private

// ====the above method can also be written as =====//

class User1{
    private _courseCount:number=1
    private _increment:number=2
    protected _numberOfPeople=2
    constructor(public email:string,public name:string){
    }
    private deleteToken(){
        console.log('token deleted successfully')
    }
    // =======getters and setters=======//
    get getAppleEmail():string{
        return `apple${this.email}`
    }
    get courseCount():number{
        return this._courseCount
    }
    set increment(value:number){
        if(value<=1){
            throw new Error('course should be more than 1')
        }
       this._increment=value
    }
}
class User2 extends User1{
    isFamily:boolean=true
     changeNumberOfPeople(value:number):number{
        return this._numberOfPeople=this._numberOfPeople+value
    }
}
const ab=new User1('ab@ab.com','abhi')
const data=new User2('ab@ab.com','abhi')
console.log(ab.courseCount)
console.log(ab.increment=8)
console.log(data.changeNumberOfPeople(8))