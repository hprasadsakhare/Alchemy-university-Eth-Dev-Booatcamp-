const Node = require("./Node.js");
class Tree {
    constructor() {
        this.root = null;
    }
    addNode(newNode) {
        if (this.root) {
            if (newNode.data < this.root.data) {
                this.root.left = newNode;
            } else {
                this.root.right = newNode;
            }
        } else {
            this.root = newNode;
        }
    }
}

const tree = new Tree();
const node = new Node(5);

tree.addNode(node);


console.log(tree.root.data); 

module.exports = Tree;