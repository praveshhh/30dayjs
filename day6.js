
////////////Activity 1/////////////
//task 1
let  arr=[1,2,3,4,5,6,7];
console.log(arr);

//task2

let arr1=[10,9,8,7];
console.log(arr1[3]);
console.log(arr1[0]);

/////////activity 2///////
//task 3
let arr2=[11,12,13,14];
arr2.push(16);
console.log(arr2);

//task4
arr2.pop();
console.log(arr2);

//task5
arr2.shift();
console.log(arr2);

//task6 
arr2.unshift(0,16);
console.log(arr2);

//activity 3 
//task 7
const myNumbers= [9,9,8,7,6,8,9,3,7,7]
const newNums= myNumbers.map((num)=> num*2);
console.log(newNums);

//task 8
 let newNumber= [2,4,6,8,10,12,14,16]
 let newNum= newNumber.filter((num1)=>newNumber%2)
 console.log(newNum);