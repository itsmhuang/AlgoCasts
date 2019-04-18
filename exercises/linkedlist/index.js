// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    
    insertFirst(data) {
        this.head = new Node(data, this.head);
        return this;
    }
    
    remove(data) {
        if ( !this.head ) {
            return;
        }
        
        //if data is first node
        if ( this.head.data === data ) {
            this.head = this.head.next;
            return data;
        }
        
        let prevNode = this.head;
        let thisNode = prevNode.next;
        
        while (thisNode) {
            if ( thisNode.data === data ) {
                break;
            }
            prevNode = thisNode;
            thisNode = thisNode.next;
        }
        
        //if not found
        if ( !thisNode ) {
            return;
        }
        
        prevNode.next = thisNode.next;
        return data;
    }
    
    find(data) {
        let thisNode = this.head;
        
        while(thisNode) {
            if ( thisNode.data === data ) {
                return thisNode;
            }
            
            thisNode = thisNode.next;
        }
        
        return thisNode;
    }
}

module.exports = { Node, LinkedList };
