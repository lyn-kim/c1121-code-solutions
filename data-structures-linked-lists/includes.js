/* exported includes */

function includes(list, value) {
  if (list.data === value) {
    return true;
  }
  while (list.next !== null) {
    if (list.next.data === value) {
      return true;
    }
    list = list.next;
  }
  return false;
}
