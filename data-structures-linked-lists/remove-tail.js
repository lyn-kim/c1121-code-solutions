/* exported removeTail */

function removeTail(list) {
  while (list.next !== null) {
    list = list.next;
  }
  list.next = list.data;
}
