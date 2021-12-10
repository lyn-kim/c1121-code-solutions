/* exported oddOrEven */

function oddOrEven(numbers) {
  var type = [];
  for (var i = 0; i < numbers.length; i++) {
    if ((numbers[i] % 2) === 0) {
      type.push('even');
    } else {
      type.push('odd');
    }
  }
  return type;
}
