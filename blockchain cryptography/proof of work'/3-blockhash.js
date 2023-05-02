const SHA256 = require("crypto-js/sha256");
const TARGET_DIFFICULTY =
    BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;

const mempool = [];
const blocks = [];

function addTransaction(transaction) {
    
    mempool.push(transaction);
}

function mine() {
   
    let blockHeight = blocks.length;
    const hash = SHA256(JSON.stringify({ id: blockHeight }));
    blocks.push({ hash: hash });
}

module.exports = {
    TARGET_DIFFICULTY,
    MAX_TRANSACTIONS,
    addTransaction,
    mine,
    blocks,
    mempool,
};