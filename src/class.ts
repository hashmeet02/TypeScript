// class Account {
// 	readonly id: number; //readOnly property can only be set in constructor
// 	owner: string;
// 	private _balance: number; //Private property can't be access outside class
// 	nickname?:string; //Optional property is not required in constructor.
	
// 	//Constructor
// 	constructor(id:number, owner:string, balance:number){
// 		this.id= id;
// 		this.owner=owner;
// 		this._balance=balance;
// 	}
// }

//Creating a class as a shorthand using Parameter Properties.
class Account {
	nickname?:string; //Optional property is not required in constructor.
	
	//Constructor
	constructor(
		public readonly id: number,
		public owner:string, 
		private _balance:number){
	}

	//Methods
	deposit(amount:number):void{
		if (amount<=0)
			throw new Error("Invalid amount");
		this._balance +=amount;
	}
	
	//A private method can only be called inside the class.
	private claculateTax(){
		//code goes here
	}
	
	//This is a getter because _blance is a private property
	get balance(): number{
		this.claculateTax();
		return this._balance;
	}
	//this is a setter
	set balance(value:number)	{
		if (value<=0)
			throw new Error('Invalid value');
		this.balance=value
	}
}

let account= new Account(1, "Mosh", 0);
account.deposit(100);
console.log(account.balance);

//Index Signatures
class SeatAssignment {
	[seatNumber: string]:string; //This is called an index signature property
}
let seats=new SeatAssignment();
//The following 2 lines are identical
seats.A1="Mosh";
seats["A1"]="Mosh";

seats.A2="John";


//Static Members
class Ride{
	private static _activeRides:number=0;
	start(){Ride._activeRides++;}
	stop(){Ride._activeRides--;}
	
	static get activeRides(){  //getter for static member will also be static.
		return Ride._activeRides
	}
}

let ride1= new Ride();
ride1.start();

let ride2= new Ride();
ride2.start();

console.log(Ride.activeRides); //active ride is 2
console.log(Ride.activeRides); //active ride is 2