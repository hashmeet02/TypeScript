//abstract class means it isn't ready to be instantiated.
abstract class Shape {
    constructor(public color:string){}
    abstract render():void; //abstract method is a method that has
                            //no way to be implemented in its class
                            //but there is a guarantee that every child
                            //class must implement it.
}

class Circle extends Shape{
    constructor(public radius:number, color:string){
        super(color);
    }

    override render(): void {
        console.log("Rendering a Circle")
    }
}

//Interface
interface Calendar{
    name: string;
    addEvent():void;
    removeEvent():void;
}

//Concrete Class
class GoogleCalendar implements Calendar{
    constructor(public name:string){}
    addEvent(): void {
        throw new Error("Method not implemented.");
    }
    removeEvent(): void {
        throw new Error("Method not implemented.");
    }
    
}

// Exercises
// 1)
// class Logger{
//     constructor(public fileName:string){}
//     write(message:string):void{}
// }
// //2)
// class Person{
//     constructor(public firstName:string, public lastName:string){}
//     get fullName(){
//         return this.firstName + " " + this.lastName;
//     }
// }
// //3)
// class Employee extends Person{
//     constructor(firstName:string, lastName:string, public salary:number){
//         super(firstName, lastName);
//     }
// }