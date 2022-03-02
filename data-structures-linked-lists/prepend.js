/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported prepend */

function prepend(list, value) {
  const newHead = new LinkedList(value, list.next);
  while (!list.next) {
    list = list.next;
  }
  return newHead;
}
