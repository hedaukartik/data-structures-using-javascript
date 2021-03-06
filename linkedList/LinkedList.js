class LinkedList {
	constructor() {
		this.head = null;
		this.length = 0;
	}

	insertAtHead(val) {
		let node = new ListNode(val, this.head);
		this.head = node;
		this.length++;
	}

	insertAtEnd(val) {
		let node = new ListNode(val);
		let tail = this.head;
		while (tail.next) {
			tail = tail.next;
		}
		tail.next = node;
		this.length++;
	}

	getByIndex(index) {
		if (index < 0 || index >= this.length) return null;
		let current = this.head;
		for (let i = 0; i < index; i++) {
			current = current.next;
		}
		return current;
	}

	insertAtIndex(index, val) {
		// o(n) time
		if (index === 0) return this.insertAtHead(val);
		const prev = this.getByIndex(index - 1);
		if (prev === null) return null;
		prev.next = new ListNode(val, prev.next);
		this.length++;
	}

	removeAtIndex(index) {
		if (index < 0 || index >= this.length) return null;
		if (index === 0) {
			this.head = this.head.next;
			this.length--;
			return;
		}
		const prev = this.getByIndex(index - 1);
		if (prev === null) return null;
		prev.next = prev.next.next;
		this.length--;
	}

	reverseList() {
		let prev = null;
		let next = null;
		let current = this.head;
		while (current !== null) {
			next = current.next;
			current.next = prev;
			prev = current;
			current = next;
		}
		this.head = prev;
	}

	reverseByK(k, head = this.head) {
		// Reverse a Linked List in groups of given size using Javascript
		let prev = null;
		let next = null;
		let current = head;
		let iterator = 0;
		while (iterator < k && current !== null) {
			next = current.next;
			current.next = prev;
			prev = current;
			current = next;
			++iterator;
		}
		if (next !== null) {
			head.next = this.reverseByK(k, next);
		}
		return prev;
	}

	printReverseByK(k) {
		const node = this.reverseByK(k);
		this.head = node;
	}

	rotateAfterK(k) {
		if (k === 0) return;
		let current = this.head;
		let iterator = 1;
		while (iterator < k && current !== null) {
			current = current.next;
			iterator++;
		}
		// if current is NULL, k is greater than or equal to count of nodes in Linked List. Dont change the list in this case
		if (current == null) {
			return;
		}

		// current point to KthNode. Store it in a variable.
		// KthNode point to node k position value.
		let kthNode = current;

		// get the current till last element
		while (current.next !== null) {
			current = current.next;
		}

		// assign last element next to head
		current.next = this.head;

		// change head to (k+1)th node
		this.head = kthNode.next;
		kthNode.next = null;
	}

	print() {
		let output = "";
		if (!this.head) {
			return output;
		}
		let tail = this.head;
		while (tail) {
			output = `${output} ${tail.val} ->`;
			tail = tail.next;
		}
		return `${output} null`;
	}
}

class ListNode {
	constructor(val, next = null) {
		this.val = val;
		this.next = next;
	}
}

LinkedList.fromValues = function (...values) {
	const ll = new LinkedList();
	for (let i = values.length - 1; i >= 0; i--) {
		ll.insertAtHead(values[i]);
	}
	return ll;
};

module.exports = LinkedList;
