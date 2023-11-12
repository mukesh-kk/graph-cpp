class Node {
  constructor(d, n) {
    this.data = d;

    if (n) {
      this.next = n;
    } else {
      this.next = null;
    }
  }
}

class LinkdedList {
  constructor(head) {
    if (head) {
      this.head = head;
    } else {
      this.head = null;
    }
  }
  /**
   *
   * @param {Node[]|Node} data
   * @returns  {Array}
   * @throws {Error}
   */
  append(data) {
    try {
      if (data && Array.isArray(data)) {
        if (data.length && this.head) {
          let p = this.head;

          while (p.next) {
            p = p.next;
          }

          for (let i = 0; i < data.length; i++) {
            p.next = new Node(data[i]);
            p = p.next;
          }
        } else {
          this.head = new Node(data[0]);
          data.shift();
          let p = this.head;

          for (let i = 0; i < data.length; i++) {
            p.next = new Node(data[i]);
            p = p.next;
          }
        }
      } else {
        const node = new Node(data);

        if (this.head) {
          let p = this.head;

          while (p.next) {
            p = p.next;
          }

          p.next = node;
          return data;
        } else {
          this.head = node;
          return data;
        }
      }
    } catch (e) {
      console.log(e.message + " at ->" + e.stack.split("\n")[1]);
    }
  }

  printList() {
    let p = this.head;

    while (p) {
      process.stdout.write(p.data + "\t");
      p = p.next;
    }
    process.stdout.write("\n");
  }

  reverseList() {
    let p = this.head,
      q = null,
      r = null;
    while (p) {
      r = q;
      q = p;
      p = p.next;
      q.next = r;
    }
    this.head = q;
  }

  length() {

    let  p =this,head ;
    let length=0;
    while(p){
        p=p.next;
        length++;
    }
    return length;

  }
}

const list = new LinkdedList();

list.append([1, 4, 10, 100]);
list.append(99);
list.reverseList();
list.printList();
