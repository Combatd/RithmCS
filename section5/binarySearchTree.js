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
    if (this._root === null) {
        this._root = node;
    }
}