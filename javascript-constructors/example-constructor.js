function ExampleConstructor() {

}
console.log('value of ExampleConstructor prototype property:', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor prototype property:', typeof ExampleConstructor);

var exampleConstructorValue = new ExampleConstructor();
console.log('value of exampleConstructorValue:', exampleConstructorValue);

var isThisInstance = exampleConstructorValue instanceof ExampleConstructor;
console.log('valu of isThisInstance:', isThisInstance);
