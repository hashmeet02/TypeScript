"use strict";
class Account {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error("Invalid amount");
        this._balance += amount;
    }
    claculateTax() {
    }
    get balance() {
        this.claculateTax();
        return this._balance;
    }
    set balance(value) {
        if (value <= 0)
            throw new Error('Invalid value');
        this.balance = value;
    }
}
let account = new Account(1, "Mosh", 0);
account.deposit(100);
console.log(account.balance);
class SeatAssignment {
}
let seats = new SeatAssignment();
seats.A1 = "Mosh";
seats["A1"] = "Mosh";
seats.A2 = "John";
class Ride {
    start() { Ride._activeRides++; }
    stop() { Ride._activeRides--; }
    static get activeRides() {
        return Ride._activeRides;
    }
}
Ride._activeRides = 0;
let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();
ride2.start();
console.log(Ride.activeRides);
console.log(Ride.activeRides);
//# sourceMappingURL=class.js.map