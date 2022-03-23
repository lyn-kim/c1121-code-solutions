/* exported removeNext */

function removeNext(list) {
  if (list.next === null) {
    return list.next;
  }
  const valueToRemove = list.next.next;
  list.next = valueToRemove;
}
