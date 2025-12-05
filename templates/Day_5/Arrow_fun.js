// Normal Function
 function demo() 
 {
    console.log("Demo Function Called");
 }
 demo();

 // Arrow Function
  let sample = () =>
  {
    console.log("Sample Arrow Function Called");
    return "Arrow Function Result";
  }
  sample();

  // single line arrow function
   let sum = (a, b) => a + b;
    console.log("Sum:", sum(5, 10));
