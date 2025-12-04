let arr=["Arun","Vijay","Ravi","Kumar"];

console.log(arr);
console.log(arr.toString());

arr.push("Suresh");
console.log(arr);

arr.pop();
console.log(arr);

arr.shift();
console.log(arr);

arr.unshift("Suresh");
console.log(arr);

arr.splice(2,0,"Ajay");
console.log(arr);

arr.splice(3,1);
console.log(arr);

let newArr=arr.slice(1,4);
console.log(newArr);    

let index=arr.indexOf("Ravi");
console.log(index);

arr.sort();
console.log(arr);

arr.reverse();
console.log(arr);

