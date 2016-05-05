// Linked List
// Implement a linked-list

var LinkedList = function (initialValue) {
  this.tail = {};
  this.tail.value = initialValue || undefined;
  this.head = {};
  this.head.value = initialValue || undefined;
  this.head.next = null;
  this.value = initialValue;
};

LinkedList.prototype.addToTail = function(int){
  var node = new LinkedList(int);
  if(this.head.value === undefined){
    this.value = int;
    this.head = node;
    this.tail = node;
  }
  else {
    this.head.next = node;
    this.head.next.value = int;
    this.tail = node;
  }

  return;
}

LinkedList.prototype.removeHead = function(){
  if(!this.head && !this.tail) return;
  else if(!this.head.next){
    this.head = undefined;
    this.tail = undefined;
  }
  else {
    console.log("HELOEHLEHLEHLFEHL")
    this.value = this.head.next.value;
    this.head = this.head.next;
  }

    return this.head;
}

LinkedList.prototype.contains = function(target){
  var boolean = false;
  var recurse = function(list){
    if(list.value === target){
      boolean = true;
    }
    if(list.head.next){
      recurse(list.head.next);
    }
  }

  recurse(this);
  return boolean;

}
