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
    hasNode(data) {
        return this.findNode(this.root, data);
    }
    findNode(root, data) {
        if (!root) {
            return false; 
        } else if (root.data === data) {
            return true;
        } else if (root.data > data) {
            return this.findNode(root.left, data); 
        } else if (root.data < data) {
            return this.findNode(root.right, data); 
        }
    }
}
const tree = new Tree();
const node1 = new Node(4);

tree.addNode(node1);

console.log(tree.hasNode(4)); 
console.log(tree.hasNode(7)); 
module.exports = Tree;