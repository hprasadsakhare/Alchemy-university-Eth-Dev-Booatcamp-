const Node = require("./Node.js");
class Tree {
    constructor() {
        this.root = null;
    }
    insertNode(root, newNode) {
        if (newNode.data < root.data) {
            if (root.left) {
                this.insertNode(root.left, newNode);
            } else {
                root.left = newNode;
                return;
            }
        } else {
            if (root.right) {
                this.insertNode(root.right, newNode);
            } else {
                root.right = newNode;
                return;
            }
        }
    }
    addNode(newNode) {
        if (this.root) {
            this.insertNode(this.root, newNode);
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
