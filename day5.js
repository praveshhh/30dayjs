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

//task6
function task6(){
    const checkCharacter= () =>{
        let str = "pravesh"
        let result= str.includes('s');
        return result;
    }
    console.log(checkCharacter());

    
}
task6();

//task7

function task7() {
   
   const result = (num1 = 16 , num2)=> num1*num2;
   console.log(result(10,20));
   console.log(result(undefined,10));


}
task7();

//task8

function task8(name, age=23){
    return `hello ${name} , you are ${age} years old. `;

}
console.log(task8("pravesh"));

//task9 
function task9(kabirdas, tulsidas){
    for(let  i=0; i<tulsidas; i++){
        kabirdas();

    }
}
    function pcall(){
        console.log("ham chinta q kare \n chinta se ka hoye");
    }
    task9(pcall,2);
