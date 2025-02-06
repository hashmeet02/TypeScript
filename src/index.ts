let sales: number=123_456_789; //_ helps to simply reading large numbers.
let course = "TypeScript";  // TS compiler can also infer types. For ex. 
                            // here course is a string variable even 
                            // though not explicity annotated
let is_published= true;
let level;                  //If not initialized, type is any

// let user:[number,string]=[1,"Mosh"];
// user.push(1);

// //problem1;
// type user={
//     name:string,
//     age:number,
//     occupation?:string
// }
// //problem 2
// type Bird={
//     fly:()=>void
// }
// type Fish={
//     swim:()=>void
// }
// type Pet= Bird | Fish

// //Problem 3
// type DayOfWeek = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday"

// //Problem 4
// let user= getUser();
// console.log(user?.address?.street)
// let x = foo ?? bar();

// //Problem 5
// let value:unkown ="a";  
// if (typeof valuee=== 'string')
//     console.log(value.toUpperCase());
