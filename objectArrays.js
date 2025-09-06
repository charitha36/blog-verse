let person={
    name:"charitha",
    age:18
}

console.log(person.name)
console.log(person["age"])

const {name,age}=person;//destructuring assignment
console.log(name)
console.log(age)

let fruits=["apple","banana","mango"]
console.log(fruits[0])

let numbers=[1,2,3,4,5]
console.log(numbers[3])

//types of array methods
let square=numbers.map((num)=>num*num);//transform each element
console.log(square)


let evens=numbers.filter((num)=>num%2==0)//filter number based on logic
console.log(evens)

let odd=numbers.filter((num)=>num%2!=0)
console.log(odd)

let sum=numbers.reduce((present,num)=>present+num)//intially starts with 0 (by default)
console.log(sum)

let sums=numbers.reduce((present,num)=>present+num,3)//intially starts with 3
console.log(sums);

person1={
    name:"triveni",
    marks:90
}
person2={
    name:"habeeba",
    marks:80
}
person3={
    name:"manuja",
    marks:98
}
let array=[person1,person2,person3]
console.log(array)

let persons=[{
    name:"siri",
    marks:78
},
{
    name:"prasanna",
    marks:68
},
{
    name:"deepika",
    marks:60
}]
console.log(persons)
for(person of persons){
    min=person.marks;
    if(min<person.marks){
        min=person.marks;
        a=person.name
    }
}
console.log("a is topper")

//another way

let maxmarks=0;
let topper="";
for(let person of persons){
    maxmarks=person.marks;
    if(person.marks<maxmarks){
        maxmarks=person.marks;
        topper=person.name;
    }
}
console.log(`topper is ${topper} and she got ${maxmarks}`)