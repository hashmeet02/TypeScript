let sales: number=123_456_789; //_ helps to simply reading large numbers.
let course = "TypeScript";  // TS compiler can also infer types. For ex. 
                            // here course is a string variable even 
                            // though not explicity annotated
let is_published= true;
let level;                  //If not initialized, type is any

let user:[number,string]=[1,"Mosh"];
user.push(1);