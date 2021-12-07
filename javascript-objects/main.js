var student = {
  firstName: 'Lyn',
  lastName: 'Kim',
  age: 28
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Urban Designer/Planner';
console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of previousOccupation:', student.previousOccupation);
console.log('value of student', student);

var vehicle = {
  make: 'Mazda',
  model: 'CX-5',
  year: 2018
};

vehicle['color'] = 'black';
vehicle['isConvertible'] = false;
console.log("value of vehicle['color']:", vehicle['color']);
console.log("value of vehicle['isConvertible']:", vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Yani',
  type: 'supermutt'
};

delete pet.name;
delete pet.type;
console.log('value of pet:', pet);
