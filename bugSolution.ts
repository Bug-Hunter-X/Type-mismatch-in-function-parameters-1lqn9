function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane User", "John User"];

// Solution 1: Modify the function to accept an array of strings
function greeterArray(people: string[]): string {
  return "Hello, " + people.join(", ");
}

console.log(greeterArray(user)); //Correct

// Solution 2: Access individual elements from the array
console.log(greeter(user[0]));//Correct
console.log(greeter(user[1]));//Correct