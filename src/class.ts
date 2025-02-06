class Account {
	id: number;
	owner: string;
	balance: number;
	
	//Constructor
	constructor(id:number, owner:string, balane:number){
		this.id= id;
		this.owner=owner;
		this.balance=balance;
	}
	//Methods
	deposit(amount:numebr):void{
		if (amount<=0)
			throw new Error("Invalid amount");
		this.balance +=amount;
	}
}