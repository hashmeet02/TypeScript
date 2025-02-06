class Account {
	readonly id: number; //readOnly property can only be set in constructor
	owner: string;
	private _balance: number; //Private property can't be access outside class
	nickname?:string; //Optional property is not required in constructor.
	
	//Constructor
	constructor(id:number, owner:string, balance:number){
		this.id= id;
		this.owner=owner;
		this._balance=balance;
	}
	//Methods
	deposit(amount:number):void{
		if (amount<=0)
			throw new Error("Invalid amount");
		this._balance +=amount;
	}
	
	//A private method can only be called inside the class.
	private claculateTax(){
				
	}
	
	//This is a getter because _blance is a private property
	getBalance(): number{
		return this._balance;
	}
}

let account= new Account(1, "Mosh", 0);
account.deposit(100);
console.log(account.getBalance());