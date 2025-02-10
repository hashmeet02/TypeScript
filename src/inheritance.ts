class Person{
    constructor(public firstName:string, public lastName:string){}
    get fullName(){
        return this.firstName + " " + this.lastName;
    }
    walk(){
        console.log("Walking");
    }
    talk(){
        console.log("Talking");
    }
}

class Student extends Person{
    constructor(
        public studentId:number, 
        firstName:string,
        lastName:string){
        super(firstName,lastName)
    }
    takeTest(){
        console.log("taking a test")
    }
}

let student=new Student(1, "John", "john@gmail.com");

//We write the override keyword to indicate overriding a method. But
//in this case the same thing could be achieved by not writing override
//But by convention we must always do that.
class Teacher extends Person{
    override get fullName(){
        return "Professor " +super.fullName;
    }
}
let teacher= new Teacher ('John', 'Smith');
console.log(teacher.fullName)

//Polymorphism
printNames([new Student(1,"John", "Smith"), new Teacher("Hashmeet", "Saini")])
function printNames(people:Person[]){
    for (let person of people)
        console.log(person.fullName);
}