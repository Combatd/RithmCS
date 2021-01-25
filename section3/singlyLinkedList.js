/*
Node: each element in the list is called a node
Head: the first element in the list
Tail: the last element in the list
Next: usually referring to the pointer to the next node in the list
Previous: in a doubly linked list, the pointer to the previous element in the list (more on this later)
*/

function Node(val){
    this.val = val;
    this.next = null;
}

function SinglyLinkedList(){
    this.head = null;
    this.tail = null;
    this.length = 0;
}

/*
#push
This function should add a node to the end of the SinglyLinkedList. 
It should return the list so that the method can be chained.
*/

SinglyLinkedList.prototype.push = function(node) {
    // increment length by 1
    this.length += 1;
    // if the head is falsey, the node is both the head and tail
    if(!this.head) {
        this.head = node;
        this.tail = node;
    } else { // else, the node is the next of the previous tail and is the tail
        this.tail.next = node;
        this.tail = node;
    }

    // return the list so that the method can be chained
    return this;
}

/*
#pop
This function should remove a node at the end of the SinglyLinkedList. 
It should return the node removed.
*/

SinglyLinkedList.prototype.pop = function() {
    let node = this.head;
    let previous = this.head;
    let returnNode = this.tail;

    while (node) {
        // check if the next node after the head is the tail
        if (node.next === this.tail) {
            previous = node; // head takes the place of this node
            this.tail = previous; // the old tail is the previous node
            returnNode = node.next; // return this at the end
            node.next = null; // there is no longer a next node due to pop
        }
        node = node.next; // now this node is the next node
    }

    return returnNode; // return the pop node
}


/*
unshift
This function should add a node to the beginning of the SinglyLinkedList. 
It should return the list so that the method can be chained.
*/

SinglyLinkedList.prototype.unshift = function(node) {
    // track the current head
    let currentHead = this.head;
    // incremeent the length of the LinkedLlist
    this.length += 1;
    // if the LinkedList has no nodes yet, the unshifted node is both head and tail
    if (!this.head) {
        this.head = node;
        this.tail = node;
    } else {
        node.next = currentHead; // becomes the head of this SinglyLinkedList instance
        this.head = node;
    }

    // return the list so the method can be chained
    return this; 
}

/*
#shift
This function should remove a node at the beginning of the SinglyLinkedList. 
It should return the node removed.
*/

SinglyLinkedList.prototype.shift = function() {
    // check if a head (first node) exists
    if (!this.head) { return null; }
    // the returned node is going to be this.head (first node)
    let returnNode = this.head;
    // set the second node to be the new head
    this.head = returnNode.next; 
    return returnNode; // return the head we grabbed earlier
}

/*
#set
This function should update the value of a node at a given index of the SinglyLinkedList. 
It should return true if the node is updated successfully, or false if an invalid index is passed in.
*/


/*
#_get
This internal/helper function should find a node at a specified index in a SinglyLinkedList. 
It should return the found node.
*/

/*
#_insert
This internal/helper function should insert a node at a specified index in a SinglyLinkedList. 
It should return the new length of the SinglyLinkedList.
*/


/*
#remove
This function should remove a node at a specified index in a SinglyLinkedList. 
It should return the removed node.
*/


/*
#reverse
This function should reverse all of the nodes in a SinglyLinkedList. 
It should return the reversed SinglyLinkedList.
*/