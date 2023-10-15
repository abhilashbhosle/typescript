"use strict";
// private: if we assign private to any variable inside the class it can be accessible only inside the class itself.
// public: by default all the keys are public inside the class
// gettrs and setters : getters and setters are mainly design to access any private methods outside the class by adding any additional
//logic or restrictions.
// setters should not return anything **.
// protected keyword is used to access the variable in the class which is inherited through that class
class User {
    constructor(email, name) {
        this.city = ''; //initializer must be there as it will not initialise when class is initialised as constructor
        this.email = email,
            this.name = name;
    }
}
const abhi = new User('ab@ab.com', 'abhi');
abhi.city = 'Hyderabad';
// abhi.name not accessible as it is private
// ====the above method can also be written as =====//
class User1 {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this._increment = 2;
        this._numberOfPeople = 2;
    }
    deleteToken() {
        console.log('token deleted successfully');
    }
    // =======getters and setters=======//
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set increment(value) {
        if (value <= 1) {
            throw new Error('course should be more than 1');
        }
        this._increment = value;
    }
}
class User2 extends User1 {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeNumberOfPeople(value) {
        return this._numberOfPeople = this._numberOfPeople + value;
    }
}
const ab = new User1('ab@ab.com', 'abhi');
const data = new User2('ab@ab.com', 'abhi');
console.log(ab.courseCount);
console.log(ab.increment = 8);
console.log(data.changeNumberOfPeople(8));
