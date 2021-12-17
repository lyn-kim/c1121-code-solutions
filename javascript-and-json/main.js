var books = [
  {
    isbn: '00000-00000',
    title: 'A Tree Grows in Brooklyn',
    author: 'Betty-Smith'
  },
  {
    isbn: '11111-11111',
    title: 'The Hunger Games',
    author: 'Suzanne Collins'
  },
  {
    isbn: '22222-22222',
    title: 'A Promised Land',
    author: 'Barack Obama'
  }
];
console.log('books:', books);
console.log('typeof books:', typeof books);

console.log('books:', JSON.stringify(books));
console.log('typeof books:', typeof JSON.stringify(books));

var student = '{ "id": 12, "name": "bobby"}';
console.log('student:', student);
console.log('typeof student:', typeof student);

console.log('student:', JSON.parse(student));
console.log('typeof student:', typeof JSON.parse(student));
