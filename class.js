//Basic Class Example
class Student {
    someFunction(){
        return "Hello From Class Student!"
    }

    getStudent(){
        return "Shagun"
    }
}

let e = new Student();
console.log("This is the implementaion for Classes:");
console.log(e.someFunction());
console.log(e.getStudent());

//Constructor Example
class Student2 {
    constructor(name){
        this._name=name;
    }
    someFunction2(){
        return "Hello From Class Student2!"
    }

    getName(){
        return `Hi! This side ${this._name}`;
    }
}
let s2 = new Student2("Sakshi");
let s3 = new Student2("Abhigya");
console.log("This is the implementaion for constructors:");
console.log(s2.someFunction2());
console.log(s2.getName());
console.log(s3.getName());

//Encapsulation get and set Example
class GetAndSet {
    constructor(name){
        this._name=name;
    }
    someFunction2(){
        return "Hello From Class GetAndSet!"
    }

    get name(){
        return this._name.toUpperCase();
    }

    set name(newValue){
        this._name= newValue;
    }
}

let g1 = new GetAndSet("Sakshi");
let g2 = new GetAndSet("Abhigya");
console.log("This is the implementation for Get and Set methods:");

g1.name = 'Chris';
console.log(g1.name);

//Inheritance is-a relationship Example
class Person{
    constructor(name){
        this.name=name;
    }

    get name(){
        return this._name;
    }

    set name(newName){
        if(newName){
            this._name= newName;
        }
    }
}

class Employee extends Person{
    doSomeWork(){
        return `${this._name} is Working`;
    }
}
let p1= new Person("Jessica");
let e1 = new Employee("Christopher");

console.log("This is the implementation for Inheritance:")
console.log(p1.name);
console.log(e1.name);
console.log(e1.doSomeWork());

//Super Example
class Manager extends Person{
    constructor(designation,name){
        super(name);
        this._designation = designation;
    }
    get designation(){
        return this._designation;
    }
    doSomeWork(){
        return `${this._name} is Working`;
    }
}

let m1 = new Manager("Technical Manager","Pawan");

console.log("This is the implementation for Super:")
console.log(m1.name);
console.log(m1.designation);
console.log(m1.doSomeWork());