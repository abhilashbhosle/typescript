"use strict";
// once abstract is assigned to class we cannot create the object using that
//class, but we can create the object using the inherited class
class TakePic {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        return 3;
    }
}
// let ab=new TakePhoto()  not allowed
class Insta extends TakePic {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log('sepia');
    }
}
const abh = new Insta('test', 'Test', 100); // works as we are creating a object from inherited class
abh.getReelTime();
