interface Quiz{
    name:string,
    type:string
}
interface Courses{
    name:string,
    author:string,
    type:string,
    lessonsCount:number
}

class Sellables<T>{
    public cart:T[]=[]

    addToCart(products:T){
        this.cart.push(products)
    }
}
const sellables=new Sellables()
sellables.addToCart({name:'task1',type:'quiz1'})