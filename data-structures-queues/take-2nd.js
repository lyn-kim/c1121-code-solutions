/* exported take2nd */

// assign first item in queue to firstValue
// assign second item in queue to secondValue
// if first item does not exist, return undefined
// if first item exists and second item is undefined, return firstVaLue
// otherwise, remove first value from queue and put it at the end
// return first value of updated queue

function take2nd(queue) {
  const firstValue = queue.dequeue();
  const secondValue = queue.peek();
  if (firstValue === undefined) {
    return undefined;
  }
  queue.dequeue();
  queue.enqueue(firstValue);
  return secondValue;
}
