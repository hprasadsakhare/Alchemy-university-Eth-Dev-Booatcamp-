class Transaction {
    constructor(inputUTXOs, outputUTXOs) {
        this.inputUTXOs = inputUTXOs;
        this.outputUTXOs = outputUTXOs;
    }
    execute() {
        let totalInput = 0;
        let totalOutput = 0;
        for (let utxo of this.inputUTXOs) {
            if (utxo.spent) {
                throw "UTXOs already spent";
            }
            totalInput += utxo.amount;
        }
        for (let utxo of this.outputUTXOs) {
            totalOutput += utxo.amount;
        }

        if (totalOutput > totalInput) {
            throw new Error("You Don't Have Enough to Spend");
        }

       
        for (let utxo of this.inputUTXOs) {
            utxo.spent = true;
        }
    }
}

module.exports = Transaction;