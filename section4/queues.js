// constructor for a Node

function Node(val) {
    this.val = val;
    this.next = null;
}

/*
Queue
It should have a size property initialized to 0
It should have a first property initialized to null
It should have a last proprety initialized to null
*/
function Queue() {
    this.storage = [];
    this.size = 0;
    this.first = null;
    this.last = null;
}