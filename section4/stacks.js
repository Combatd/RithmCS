/*
Part I
Write a constructor function for a Stack
Implement the following methods on the Stack.prototype

push
This function adds the value to the beginning of the stack. This should be an O(1) operation and return the size of the stack.

pop
This function removes the value at the beginning of the stack. This should be an O(1) operation and return the value removed.

peek
This function returns the first value in the stack.

print
This function console.log's all the values in the stack.
*/

function Stack() {
    this.data = []; // stack
}