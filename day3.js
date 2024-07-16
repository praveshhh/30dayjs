// task1 
let a=0;
if(a>0){
    console.log("positive");
}else if(a==0){
    console.log("a is zero");
}else if (a<0){
    console.log("a is negative");
}

//task2
let age= 100;
if(age>=18){
    console.log("eligibe to vote");

}else {
    console.log("not elegible");
}

//task3
let num1=10;
let num2=20;
let num3= 15;
if(num1>num2){
    console.log("num1 is greater:"+num1);
}
else if(num1>num3){
    console.log("num1 is greater:"+num1);
}
else if(num2>num1){
    console.log("num2 is greater:"+num2);
}else if(num2>num3){
    console.log("num2 is greater:"+num2);
}else{
    console.log("num3 is greater:"+num3);
}

//task4

let day = 2;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("wednsday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Monday");
    break;
  default:
    console.log("give wright number");
}

//task 5

let Num = 95;

switch (true) {
  case Num >= 90:
    console.log("A");
    break;
  case Num >= 80:
    console.log("B");
    break;
  case Num >= 70:
    console.log("C");
    break;
  case Num >= 60:
    console.log("D");
    break;
  default:
    console.log("F");
}

//task 6
let n=0;
n%2==0?console.log("Even"):console.log("Odd");

//task 7
let year=2020;

if(year%4==0){
  console.log("Leap Year");
}
else{
  console.log("Not a leap year");
}
