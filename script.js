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
        console.log(
          `Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`
        );
      }
    }

    // Test Cases
    function runTests() {
      console.log("Testing Person class...");
      const person = new Person("Alice", 25);
      const originalLog = console.log;

      // Test greet method of Person
      console.log = (message) => {
        if (message === 'Hello, my name is Alice, I am 25 years old.') {
          originalLog("Person class test passed!");
        } else {
          originalLog("Person class test failed!");
        }
      };
      person.greet();

      console.log("Testing Employee class...");
      const employee = new Employee("Bob", 30, "Manager");

      // Test jobGreet method of Employee
      console.log = (message) => {
        if (
          message ===
          'Hello, my name is Bob, I am 30 years old, and my job title is Manager.'
        ) {
          originalLog("Employee class test passed!");
        } else {
          originalLog("Employee class test failed!");
        }
      };
      employee.jobGreet();

      // Restore original console.log
      console.log = originalLog;
    }

    // Run Tests
    runTests();