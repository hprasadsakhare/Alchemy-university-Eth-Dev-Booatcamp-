class TXO {
    constructor(owner, amount) {
        this.owner = owner;
        this.amount = amount;
        this.spent = false;
    }
    spend() {
        this.spent = true;
    }
}
const txo = new TXO("1FNv3tXLkejPBYxDHDaZz6ENNz3zn3G4GM", 10);
console.log("Owner address: ", txo.owner); 
console.log("Amount: ", txo.amount); 
console.log("IsSpent", txo.spent); 
txo.spend(); 
console.log("IsSpent", txo.spent);
module.exports = TXO;