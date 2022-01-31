function filter(array, predicate) {
  const outputArray = [];
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      outputArray.push(array[i]);
    }
  }
  return outputArray;
}
