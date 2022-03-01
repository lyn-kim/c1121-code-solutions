/* exported maxValue */

function maxValue(stack) {
  if (stack.peek() === undefined) {
    return -Infinity;
  } else {
    let maxNum = stack.pop();
    while (stack.peek()) {
      const currentNum = stack.pop();
      if (currentNum > maxNum) {
        maxNum = currentNum;
      }
    }
    return maxNum;
  }
}
