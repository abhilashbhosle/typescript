"use strict";
// Generics are used to create the reusable components
// let us consider there is a function which is reused and sometimes
//it may accept boolean and returns boolean at some place and accepts string
// and returns string at other place, for such things there are many ways 
// using '|' or any we can acheive it but generics are the best way to do it
//** generics logs the value i.e, the returned value should be the value which
// you are passing in or any of the value from that particular method
let score = [];
let names = [];
//========USING '|' ==========//
function identityOne(val) {
    return val;
}
// ===========USING any===========//
function identityTwo(val) {
    return val;
}
// ==========GENERICS===========//
function identityThree(val) {
    return val;
}
identityThree(3);
identityThree('three');
// =======THE OPTIMISED WAY OF GENERICS=======//
function identityFour(val) {
    return val;
}
identityFour(3);
identityFour('three');
//========GENERICS WITH  INTERFACES=======//
// we have seen generics with the predefined data type above, let us see
// with user defined datatype.
function identityFive(val) {
    return val;
}
identityFive({ name: 'abhi', id: 777 });
function identitySix(products) {
    const myindex = 3;
    // return 4 ===this is not possible as it should return products or any item from the products
    return products[myindex];
}
//=======GENERICS WITH ARROW FN | IF WE WANT TO RETURN ANY DATATYPE====//
const identitySeven = (products) => {
    return 5;
};
function ConnectionType(val1, val2) {
    return {
        val1,
        val2
    };
}
ConnectionType('mongoDB', { name: 'abhi', column: 2 });
