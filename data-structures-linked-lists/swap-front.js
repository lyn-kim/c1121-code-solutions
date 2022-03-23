/* exported swapFront */

function swapFront(list) {
  if (list.next === null) {
    return list;
  }
  let firstNode = list;
  const secondNode = list.next;
  const remainingNodes = list.next.next;
  firstNode = secondNode;
  firstNode.next = list;
  firstNode.next.next = remainingNodes;
  return firstNode;
}
