/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  if (queue.peek() === undefined) {
    return undefined;
  }
  let firstValue = queue.dequeue();
  for (var i = 0; i < index; i++) {
    queue.enqueue(firstValue);
    firstValue = queue.dequeue();
  }
  return firstValue;
}
