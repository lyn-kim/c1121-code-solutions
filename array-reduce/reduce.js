function reduce(array, combine, initialValue) {
  // declare a variable for the final value (initialValue)
  // declare a variabe to keep track of the index in the array (0)
  // check to see if the arguments.length is 2 (if two arguments have been passed) or not
  //  if it's 2, that means we got no initial value (no initial value was passed)
  //    set the initial value to array[0]
  //    set the index variable to 1 (skip first element)
  //
  // loop through the array
  // call the combine function, passing in final value and array[i]
  // assign the return of combine back to final value

  // return the final value
  let index = 0;
  let finalValue = initialValue;
  if (arguments.length === 2) {
    index = 1;
    finalValue = array[0];
  }
  for (;index < array.length; index++) {
    finalValue = combine(finalValue, array[index]);
  }
  return finalValue;
}
