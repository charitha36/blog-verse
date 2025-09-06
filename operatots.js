//arithmetic operators

let x=10,y=3;
console.log(x+y)
console.log(x-y)
console.log(x*y)
console.log(x/y)
console.log(x%y)
console.log(x**y)

//assignment operators
let z=3;
z+=3;
console.log(z)
z-=1;
console.log(z)
z*=5;
console.log(z)
z/=2;
console.log(z)
z**=2;
console.log(z)
z%=3;
console.log(z)

//comparision operators

let a=10,b="10";
console.log(a==b)
console.log(a!=b)
console.log(a===b)
console.log(a!==b)
console.log(a>b)
console.log(a<b)
console.log(a<=b)
console.log(a>=b)

//logical operators
let age=10;
console.log(age>=20 && age<=40)
console.log(age>=20 || age <=89)
console.log(!(age<18))

//string operators
let firstname="charitha"
let lastname="sri"
let fullname=firstname+" "+lastname
console.log(fullname)
let correctname=`hello ${firstname} ${lastname}, welcome to devastra`
console.log(correctname)

//ternary operators

let myAge=18;
if(myAge>=18){
    console.log("You are eligible to vote")
}
else{
    console.log("You are not eligible to vote")
}
let result=myAge>=18? "You are eligible to vote":"You are not eligible to vote"
console.log(result)

//increment and decrement operators

let count=5;
console.log(count++)
console.log(count)
console.log(++count)

//typeof operators
console.log(typeof count)
console.log(typeof"charitha")
console.log(typeof 18)