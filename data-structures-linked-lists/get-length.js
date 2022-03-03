/* exported getLength */

function getLength(list) {
  let count = 1;
  while (list.next !== null) {
    count++;
    list = list.next;
  }
  return count;
}
