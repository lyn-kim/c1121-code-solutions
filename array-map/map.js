function map(array, transform) {
  const outputArray = [];
  for (let i = 0; i < array.length; i++) {
    const finalValue = transform(array[i]);
    outputArray.push(finalValue);
  }
  return outputArray;
}
