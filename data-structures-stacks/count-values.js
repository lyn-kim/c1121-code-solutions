/* exported countValues */

function countValues(stack) {
  let count = 0;
  while (stack.peek() !== undefined) {
    count++;
    stack.pop();
  }
  return count;
}
