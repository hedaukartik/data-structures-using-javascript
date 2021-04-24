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
		let tail = this.head;
		while (tail !== null) {
			next = tail.next;
			tail.next = prev;
			prev = tail;
			tail = next;
		}
		this.head = prev;
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
