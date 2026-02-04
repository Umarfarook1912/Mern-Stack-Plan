var globalScope="i am variable"
let blockScope="i am let"
const notChange="i am constant"
// console.log(window.globalScope);
// console.log(window.blockScope);
// console.log(window.notChange);

//var is function scoped
function outerFunction(){
    if(true){
        var functionVar="i am function var"
    }
    console.log(functionVar);
}
// outerFunction();


//let and const are block scoped
function blockFunction(){
    if(true){
        const blockVar="i am block var"
        console.log(blockVar);
        
    }
    console.log(blockVar);
}
// blockFunction();

var age ;
var age=25;
console.log(age);
var age="eight";
console.log(age);

let score=100;
console.log(score);
score=200;
console.log(score);


const pi=3.14;
console.log(pi);

// pi=3.1416;
// console.log(pi);


//function types
//Named function
function add(a,b){
    console.log(a+b);
}
add(2,3);

//Anonymous function
let newFunction=function(a,b){
    console.log(a+b);
}
newFunction(5,6);

//Arrow function 
const newArrowFunction= (a,b)=>{
    console.log(a+b);
}
newArrowFunction(8,9);