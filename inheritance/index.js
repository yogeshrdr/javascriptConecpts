class Person{
    constructor(name, id){
        this.name = name;
        this.id = id;
    }

    getDetails() {
        return `person name: ${this.name} & personID : ${this.id}`;
    };
};


class Employee extends Person{
    constructor(name, id, salary){
        super(name, id);
        this.salary = salary;
    }

    getSalary(){
        return `salary: ${this.salary}`;
    }
};


const employee1 = new Employee("employee1", 101, 10000);
console.log(employee1.getDetails());
console.log(employee1.getSalary());


//function 

function PersonFunc1(name, id){
    this.name = name;
    this.id = id;
    this.getDetails = function(){
        return `person name: ${this.name} & personID : ${this.id}`;
    }
}


function EmployeeFunc1(name, id, salary){
    this.name = name;
    this.id = id;
    this.salary = salary
    this.getSalary = function(){
        return `salary: ${this.salary}`;
    }
};


EmployeeFunc1.prototype = new PersonFunc1();
const employee2 = new EmployeeFunc1("employee2", 102, 15000);
console.log(employee2.getDetails());
console.log(employee2.getSalary());


//using arrow key words
const PersonFunc2 = (name, id) => {
    let properties  = { name, id };
    
    return({
        getDetails: () =>  {
            return `person name: ${properties.name} & personID : ${properties.id}`
        }
    })
};


const EmployeeFunc2 = (name, id, salary) => {
    const emp = PersonFunc2(name, id);
    let properties = {salary};
    emp.getSalary = () => {return `salary: ${properties.salary}`;}
    return emp;
};

const employee3 = EmployeeFunc2("employee3", 103, 20000);
console.log(employee3.getDetails());
console.log(employee3.getSalary());





