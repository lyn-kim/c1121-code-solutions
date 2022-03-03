/* exported updateNext */

function updateNext(list, value) {
  if (list.next === null) {
    return list.next;
  }
  list.next.next = value;
}
