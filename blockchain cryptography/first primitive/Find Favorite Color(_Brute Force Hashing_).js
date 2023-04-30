const { sha256 } = require("ethereum-cryptography/sha256");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");


const COLORS = ['red', 'green', 'blue', 'yellow', 'pink', 'orange'];


function findColor(hash) {
    for (let i=0; i < COLORS.length;i++){
        let color = COLORS[i];
        let colorBytes = utf8ToBytes(color);
        let colorHash = sha256(colorBytes);
        if (toHex(hash) === toHex(colorHash)){
            return color;
        }
    }
}

module.exports = findColor;