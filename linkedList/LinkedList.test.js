const LinkedList = require("./LinkedList");

describe("#insertAtHead", () => {
	test("it add the element to the beginning of the list", () => {
		const ll = new LinkedList();
		ll.insertAtHead("a");
		const oldHead = ll.head;
		ll.insertAtHead("b");
		expect(ll.head.val).toBe("b");
		expect(ll.head.next).toBe(oldHead);
		expect(ll.length).toBe(2);
	});
});

describe("#getByIndex", () => {
	describe("with index less than 0", () => {
		test("it returns null", () => {
			const ll = LinkedList.fromValues(10, 20, 30);
			expect(ll.getByIndex(-1)).toBeNull();
		});
	});
	describe("with index greater than list length", () => {
		test("it returns null", () => {
			const ll = LinkedList.fromValues(10, 20, 30);
			expect(ll.getByIndex(5)).toBeNull();
		});
	});
	describe("with index 0", () => {
		test("it returns the head", () => {
			const ll = LinkedList.fromValues(10, 20, 30);
			expect(ll.getByIndex(0).val).toBe(10);
		});
	});
	describe("with index in the middle", () => {
		test("it returns the head", () => {
			const ll = LinkedList.fromValues(10, 20, 30, 40);
			expect(ll.getByIndex(2).val).toBe(30);
		});
	});
});

describe("#insertAtEnd", () => {
	test("it insert At End", () => {
		const ll = LinkedList.fromValues(10, 20, 30);
		ll.insertAtEnd(40);
		console.log(ll.print());
		const element = ll.getByIndex(ll.length - 1);
		console.log(element);
		expect(element.val).toBe(40);
		expect(ll.length).toBe(4);
	});
});

describe("#insertAtIndex", () => {
	describe("with index less than 0", () => {
		test("it doesnt insert anything", () => {
			const ll = LinkedList.fromValues(10, 20, 30);
			ll.insertAtIndex(-1, -10);
			expect(ll.length).toBe(3);
		});
	});
	describe("with index greater than list length", () => {
		test("it doesnt insert anything", () => {
			const ll = LinkedList.fromValues(10, 20, 30);
			ll.insertAtIndex(5, 60);
			expect(ll.length).toBe(3);
		});
	});
	describe("with index 0", () => {
		test("insert at the head", () => {
			const ll = LinkedList.fromValues(10, 20, 30);
			ll.insertAtIndex(0, 60);
			expect(ll.length).toBe(4);
			expect(ll.head.val).toBe(60);
			expect(ll.head.next.val).toBe(10);
		});
	});
	describe("with index in the middle", () => {
		test("insert at the middle", () => {
			const ll = LinkedList.fromValues(10, 20, 30);
			ll.insertAtIndex(1, 60);
			const node = ll.getByIndex(1);
			expect(node.val).toBe(60);
			expect(node.next.val).toBe(20);
		});
	});
});

describe("#removeAtIndex", () => {
	describe("with index less than 0", () => {
		test("it doesnt remove anything", () => {
			const ll = LinkedList.fromValues(10, 20, 30);
			ll.removeAtIndex(-1);
			expect(ll.length).toBe(3);
		});
	});
	describe("with index greater than list length", () => {
		test("it doesnt remove anything", () => {
			const ll = LinkedList.fromValues(10, 20, 30);
			ll.removeAtIndex(5);
			expect(ll.length).toBe(3);
		});
	});
	describe("with index 0", () => {
		test("remove at the head", () => {
			const ll = LinkedList.fromValues(10, 20, 30);
			ll.removeAtIndex(0);
			expect(ll.length).toBe(2);
			expect(ll.head.val).toBe(20);
			expect(ll.head.next.val).toBe(30);
		});
	});
	describe("with index in the middle", () => {
		test("remove at the middle", () => {
			const ll = LinkedList.fromValues(10, 20, 30);
			ll.removeAtIndex(1);
			const node = ll.getByIndex(1);
			expect(node.val).toBe(30);
		});
	});
});

describe("#reverseLinkedList", () => {
	test("reverse linked list from start to end", () => {
		const ll = LinkedList.fromValues(10, 20, 30);
		ll.reverseList();
		expect(ll.head.val).toBe(30);
		expect(ll.length).toBe(3);
	});
});

describe("#printLinkedList", () => {
	test("print empty string if head is null", () => {
		const ll = LinkedList.fromValues();
		expect(ll.print()).toMatch("");
	});
	test("print linked list from start to end", () => {
		const ll = LinkedList.fromValues(10, 20, 30);
		expect(ll.print()).toMatch(/20/i);
	});
});
