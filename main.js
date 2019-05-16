// stack -> LIFO
// queue -> FIFO
// tree

array = ['Ashley', 'Luis', 'Giselle', 'Diana', 'Joseph']

  class Stack {
  constructor(arr) {
  this.list = arr
}
  get() {

    let item = this.list.pop()
    this.list.push(item)
    return item
  }
  add(item) {
    this.list.push(item)
  }

 class Queue {
   constructor(arr) {
     this.list = arr
   }
   get() {
     return this.list[0]
   }


   add(item) {
     return this.list.push()
   }
   }

  let stack = new Stack(array)
  let queue + new Queue(array)

   let Kingdom = {
     king: { name: 'Roy', knights: {k1: 'Luciana', k2: 'marth' }
   }

   let castle = {
     queen: {name: 'Laura', children: { princes: 'Troy', princess: 'Helena' son: {name: 'Jeffrey' } }
