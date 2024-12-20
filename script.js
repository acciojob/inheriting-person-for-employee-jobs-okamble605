// Define the Person class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to greet the person
  greet() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
  }
}

// Define the Employee class that extends Person
class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age); // Call the constructor of the Person class
    this.jobTitle = jobTitle;
  }

  // Method to greet the employee along with their job title
  jobGreet() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
  }
}

// Example Test Cases
const person = new Person("Alice", 25);
person.greet(); // Expected output: Hello, my name is Alice, I am 25 years old.

const employee = new Employee("Bob", 30, "Manager");
employee.jobGreet(); // Expected output: Hello, my name is Bob, I am 30 years old, and my job title is Manager.
