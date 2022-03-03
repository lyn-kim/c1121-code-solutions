/* exported postpone */

function postpone(queue) {
  if (queue.peek() !== undefined) {
    const firstValue = queue.dequeue();
    queue.enqueue(firstValue);
    return queue;
  }
}
