// once abstract is assigned to class we cannot create the object using that
//class, but we can create the object using the inherited class

abstract class TakePic{
    constructor(
       public cameraMode:string,
       public filter:string
    ){
    }
    abstract getSepia():void    
    getReelTime():number{
        return 3
    }
}
// let ab=new TakePhoto()  not allowed

class Insta extends TakePic{
    constructor(
        public cameraMode:string,
        public filter:string,
        public burst:number
    ){
        super(cameraMode,filter)
    }
    getSepia(): void {
       console.log('sepia') 
    }
}

const abh=new Insta('test','Test',100) // works as we are creating a object from inherited class
abh.getReelTime()