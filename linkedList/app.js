const LinkedList = require("./LinkedList");

const ll = new LinkedList();
ll.insertAtHead("a");
ll.insertAtHead("b");
ll.insertAtHead("c");
ll.insertAtEnd("d");
console.log(ll.print());
// ll.reverseList();
// console.log(ll.print());
// const rotateK = ll.rotateByK(2);
// console.log(JSON.stringify(rotateK));
ll.printReverseByK(3);
console.log(ll.print());
ll.rotateAfterK(1);
console.log(ll.print());
console.log(LinkedList.fromValues(10, 20, 30).print());
