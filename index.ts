// 1. Given the data below, define a type alias for representing users.
type User = {
    name: string
    age:number
    company:string
}

    

let users =  [  
    {
        name:'Shoha Tsuchida',
        age:99,
        company:'Coding Temple'
    },  
    {
        name:'Dylan Katina',
        age:99
    }
];


// 2. Define a type for representing the days of week. Valid values are “Monday”, “Tuesday”, etc.  (make literal type)
type DayOfWeek = 'Monday'| 'Tuesday'| 'Wednesday'| 'Thursday'| 'Friday'|'Saturday'|'Sunday';

// 3. Given the Person class below, create a getter for getting the full name of a person.

class Person {
    constructor(
        public firstName:string, 
        public lastName:string) {}

    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
        }
        }
        
        const person = new Person('John', 'Doe');
        console.log(person.fullName);
        


// 4. Create a new class called "Employee" that extends "Person" and adds a new property called salary. 
class Employee extends Person {
    constructor(salary:number,public firstName:string,public lastName:string){
        super(firstName, lastName)
    }
}

// 5. Given the data below, define an interface for representing employees:
// HINT: You'll need 2 interfaces.

interface Employee {
    name:string;
    salary:number;
    address:Address;

}

interface Address {
    street:string;
    city:string;
    zipCode:number;
}

let employee = {
    name:'Christian Askew',
    salary:1_000_000,
    address:{
        street:'Thieves st',
        city:'Seattle',
        zipCode: 98101
    }
};