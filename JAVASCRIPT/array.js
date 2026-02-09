// let array1=["umar",1,true];
// console.log(array1);

// let newArray=new Array();
// newArray[0]="hello";
// newArray[1]=42;
// console.log(newArray);
// console.log(newArray[1]);
// console.log("pushing")
// newArray.push("world");
// console.log(newArray);
// console.log("pop last element")
// newArray.pop();
// console.log(newArray);
// console.log("remove first element")
// newArray.shift();
// console.log(newArray);

// let arr1=[1,2,3];
// let arr2=[4,5,6];
// let newArray=arr1.concat(arr2);
// console.log(newArray);
// //[1,2,3,4,5,6]
// let sliceArray=newArray.slice(2,4);
// console.log(sliceArray);
    
// let array3=[10,20,30,[40,50],[60,70,80]]
// let new1 =array3.flat();
// console.log(new1);
// let new2=array3[4][1];
// console.log(new2);

// let array4=[1,2,3,4,5];
// // array4.fill(101)
// console.log(array4);
// // array4.reverse();
// // console.log(array4);
// console.log(array4.includes(6));
// let joinArray=array4.join("-");
// console.log(joinArray);
// //split and join
// let str="hello,world,welcome to javascript";
// let splitArray=str.split(",");
// console.log(splitArray);
// let joinString=splitArray.join("-");
// console.log(joinString);


// map
const numbers=[13,20,35,40,50];
const squaredNumbers=numbers.map(n=>n*n);
console.log(squaredNumbers);

//filter 
const evenNumbers=numbers.filter(n=>n%2===0);
console.log(evenNumbers);

//find
const firstEvenNumbers=numbers.find(n=>n%2===0);
console.log(firstEvenNumbers);


//reduce
const nums = [1, 2, 3, 4];

const sum = nums.reduce((total, n) => total + n, 0);

console.log(sum);



