function Node(val){
    this.val = val;
    this.left = null;
    this.right = null;
}

function BinarySearchTree(){
    this._root = null;
}

/*
#insertIteratively
This function should insert a node in a binary tree. This should be solved using iteration.
*/

BinarySearchTree.prototype.insertIteratively = function(node) {
    // Start at the root
    if (this._root === null) { // if there is nothing at the root
        this._root = node; // insert that node
        return true;
    }

    let parentNode = null;
    let goToNode = this._root;

    // If the value of the node you are inserting for is less than the root go to the left node (if it exists)
    if (node.val < this._root.val) {
        goToNode = this._root.left;
    }
    // If the value of the node you are inserting for is greater than the root go to the right node (if it exists)
    if (node.val > this._root.val) {
        goToNode = this._root.right;
    }
    // Keep moving right or left until you find a node with no left or right value. Once you find that empty value, place the newly created node there.
    while(true) {
        if(goToNode === null) {
            // insert new node at the bottom of the Binary Search Tree
            if(node.val < goToNode.val) {
                goToNode.left = node;
                return true;
            } else if (node.val > goToNode.val) {
                goToNode.right = node;
                return true;
            }
        }

        // stop if the spot is found
        if(goToNode.val === node.val) {
            return false;
        }

    
    }
}