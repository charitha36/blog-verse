function greet(){
    console.log("Welcome to DevAstra")
}
greet()

function add(x,y){
    return x+y;
}
let result=add(2,5)
console.log(result)

const pi=3.14
console.log(pi)

const multiply =function(x,y){
    return x*y;
}
console.log(multiply(5,3))

//Arrow function
const square =(x)=>x*x;
console.log(square(5))
const subtract=(x,y)=>{
    console.log(x,y)
    return x-y;
}
 console.log(subtract(7,5))


 function wish(){
    console.log("hello")
 }
 wish()