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

/*
#enqueue
This function adds the value to the end of the queue. 
This should be an O(1) operation and return the size of the queue.
*/

Queue.prototype.enqueue = function(val) {
    this.storage.push(val);
    this.size += 1;
    // we need to set Queue.first and Queue.last property
    if(this.size === 1) {
        this.first = this.storage[0];
    } else {
        this.last = this.storage[this.size - 1]; // last Node in Queue
    }

    return this.size;
}


/*
#dequeue
This function removes the value at the beginning of the queue.
This should be an O(1) operation and return the size of the queue.
*/

Queue.prototype.dequeue = function() {
    if (this.size < 1) {
        return this.size;
    } else if (this.size === 1) {
        this.storage.shift();
        this.first = null;
        this.last = null;
    } else {
        this.storage.shift();
        this.size -= 1;
        this.first = this.storage[0];
        this.last = this.storage[this.size - 1];
    }

    return this.size;
}


/*
#peek
This function returns the first value in the queue.
*/

Queue.prototype.peek = function() {
    if(this.storage.size < 1) {
        return -1;
    } else {
        return this.storage[0];
    }
}


let q = new Queue();;

q.enqueue(5);
q.enqueue(10);
q.enqueue(15);

// q.dequeue();

console.log('The Queue named q: ', q);
console.log(`The first element of q is ${q.peek()}`);