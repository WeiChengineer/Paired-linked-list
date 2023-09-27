// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        const newNode = new SinglyLinkedNode(val)

        newNode.next = this.head
        this.head = newNode
        this.length++;
        return this;
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!

        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
        } else {
            let curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = newNode;
        }
        this.length++;
        return this;
        // Write your hypothesis on the time complexity of this method here
    }

    removeFromHead() {
        if (this.length === 0) {
            return undefined
        } else {
            let currNode = this.head
            this.head = this.head.next
            this.length--;
            return currNode;
        }
    }

    removeFromTail(val) {
        if (this.length === 0) {
            return undefined
        }
        if (this.head.next === null) {
            const removeVal = this.head.val
            this.head = null;
            this.length--;
            return removeVal;
        }
        let prevNode = this.head;
        let currNode = this.head.next;
        while (currNode.next !== null) {
            prevNode = currNode;
            currNode = currNode.next;
        }
        const removeVal = currNode
        prevNode.next = null
        this.length--
        return removeVal
    }

    peekAtHead() {
        if (this.length === 0) {
            return undefined;
        }
        if (this.head) return this.head.value;
        // Return the value of head node

        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

    print() {
        let curr = this.head
        while (curr) {
            console.log(curr.value);
            curr = curr.next
        }
        // Print out the linked list

        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}