let marks=85;
if(marks>=90){
    console.log("A+ grade")
}
else if(marks>=80){
    console.log("A grade")
}else if(marks>=70){
    console.log("B grade")
}
else{
    console.log("Fail")
}

let day=5
switch(day){
    case 1:
        console.log("sunday")
        break;
    case 2:
        console.log("monday")
        break;
    case 3:
        console.log("tuesday")
        break;
    case 4:
        console.log("wednesday")
        break;
    case 5:
        console.log("thursday")
        break;
    case 6:
        console.log("friday")
        break;
    case 7:
        console.log("saturday")
         break;
    default:
        console.log("invalid")
        break;

}
console.log("using for")
let i;
for(i=0;i<15;i++){
    console.log(i)
}
console.log("using while")
let j=0;
while(j<5){
    console.log(j)
    j++;
}
console.log("using do-while")
let k=0;
do{
    console.log(k)
    k++;
}
while(k<4);

let colors=["red","blue","green"]
for(let i=0;i<colors.length;i++){
    console.log(colors[i])
}
// in simple form for array
for(let color of colors){
    console.log(color)
}
//object
let person={
    name:"charitha",
    age:18,
    college:"JNTU-GV"
}
for(let key in person){
    console.log(`${key}: ${person[key]}`)
}

for(let i=5;i>=0;i--){
    if(i===3){
        continue;
    }else if(i===2){
        break;
    }
    console.log(i)
}