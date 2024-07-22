//task 1

function task1(number){
if (number%2===0){
    console.log("even number");
}
else{
    console.log("odd number");
}
}
task1(2);

//task2
function task2(number){
   let num= number*number;
   console.log("square of the number is: "+num);

}
task2(13);

//task3

function task3(){
    let a=10;
    let b=12;
    if(a>b){
        console.log("a is bigger number ");
    }else{
        console.log("b is bigger");
    }
}
task3();

//task4
function task4(){
    let a= "hello";
    let b="world";
    console.log(a +" " + b );
}
task4();

//task 5

function task5 (){
    const sum = (num1, num2) => num1 + num2;
    const result = sum(16,7);
    console.log(result);
}
task5();

