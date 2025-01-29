class List1 {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class List2 {
  constructor(head = null) {
    this.head = head;
    this.next = null;
  }
}
class List3{
    constructor(head = null){
        this.head =head
        this.next = null;
    }
}
class List4{
    constructor(head = null){
        this.head =head
        this.next = null;
    }
}
class List5{
    constructor(head = null){
        this.head =head
        this.next = null;
    }
}

let node1 = new List1(3);
let node2 = new List1(5);
let node3 = new List1(7);
let node4 = new List1(9);
node1.next = node2;
node2.next = node3;
node3.next = node4;
let list = new List2(node1);
let list2 =  new List3(node2)
let list3 =  new List4(node3)
let list4 =  new List5(node4)

document.write(list.head.next.data);
console.log(list4);
