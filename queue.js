class _Node {
  constructor(data) {
    this.data = data
    this.next = null //next is towards the beginning of the queue when looking at it vertically (down)
    this.prev = null //prev is towards the back of the queue (up)
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
  }

  enqueue(item) {
    const node = new _Node(item)
    //if the queue is empty
    if (this.first === null) {
      this.first = node
    }
    //if the queue isnt empty
    //then take the node that is currently at the end of the queue and link it to the new node
    if (this.last) {
      node.next = this.last
      this.last.prev = node
    }
    //make the new node the last item on the queue
    this.last = node
  }

  dequeue() {
    if (this.first === null) {
      console.log('your queue is empty')
      return
    }
    let first = this.first
    this.first = first.prev

    //if this is the last item in the queue/theres only 1 item in queue
    if (first === this.last) {
      this.first = null
      this.last = null
    } else {
      this.first.next = null
      //causes problems
    }

    return first.data
  }
}

function display(queue) {
  if (queue.first === null) {
    return
  }
  let current = queue.last
  while (current !== null) {
    console.log(current.data)
    current = current.next
  }
}

function peek(queue) {
  if (queue.first === null) {
    return null
  }
  return queue.first.data
}

function isEmpty(queue) {
  return peek(queue) === null ? true : false
}

let dogQueue = new Queue()
dogQueue.enqueue({
  imageURL:
    'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
  imageDescription:
    'A smiling golden-brown golden retreiver listening to music.',
  name: 'Zeus',
  sex: 'Male',
  age: 3,
  breed: 'Golden Retriever',
  story: 'Owner Passed away',
})
dogQueue.enqueue({
  imageURL: 'http://www.dogster.com/wp-content/uploads/201gafgaga.jpg',
  imageDescription: 'DOGGGGG.',
  name: 'HeyZeus',
  sex: 'Female',
  age: 4,
  breed: 'German Shepherd',
  story: 'Robbed a bank',
})
dogQueue.enqueue({
  imageURL: 'httadsffd://Cute%20dog%20listening%20to%20music%201_1.jpg',
  imageDescription: 'PUPPERS.',
  name: 'Xiphos',
  sex: 'Male',
  age: 5,
  breed: 'Labradoodle',
  story: 'Too ugly',
})

let catQueue = new Queue()

catQueue.enqueue({
  imageURL:
    'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
  imageDescription:
    'Orange bengal cat with black stripes lounging on concrete.',
  name: 'Fluffy',
  sex: 'Female',
  age: 2,
  breed: 'Bengal',
  story: 'Thrown on the street',
})
catQueue.enqueue({
  imageURL: 'https:/asdfadfdat.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
  imageDescription: '1231231232.',
  name: 'Duffy',
  sex: 'Female',
  age: 1,
  breed: 'Meowsers',
  story: 'Because cat',
})

catQueue.enqueue({
  imageURL: 'https://assetar23452ize/tmg-slideshow_l.jpg',
  imageDescription: 'Is cat',
  name: 'Stuffy',
  sex: 'Male',
  age: 6,
  breed: 'Siamese',
  story: 'Meow',
})

const dogData = [
  {
    imageURL:
      'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription:
      'A smiling golden-brown golden retreiver listening to music.',
    name: 'Zeus',
    sex: 'Male',
    age: 3,
    breed: 'Golden Retriever',
    story: 'Owner Passed away',
  },
  {
    imageURL: 'http://www.dogster.com/wp-content/uploads/201gafgaga.jpg',
    imageDescription: 'DOGGGGG.',
    name: 'HeyZeus',
    sex: 'Female',
    age: 4,
    breed: 'German Shepherd',
    story: 'Robbed a bank',
  },
  {
    imageURL: 'httadsffd://Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription: 'PUPPERS.',
    name: 'Xiphos',
    sex: 'Male',
    age: 5,
    breed: 'Labradoodle',
    story: 'Too ugly',
  },
]

const catData = [
  {
    imageURL:
      'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
    imageDescription:
      'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Fluffy',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Thrown on the street',
  },
  {
    imageURL: 'https:/asdfadfdat.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
    imageDescription: '1231231232.',
    name: 'Duffy',
    sex: 'Female',
    age: 1,
    breed: 'Meowsers',
    story: 'Because cat',
  },
  {
    imageURL: 'https://assetar23452ize/tmg-slideshow_l.jpg',
    imageDescription: 'Is cat',
    name: 'Stuffy',
    sex: 'Male',
    age: 6,
    breed: 'Siamese',
    story: 'Meow',
  },
]

module.exports = { dogQueue, catQueue, peek }
