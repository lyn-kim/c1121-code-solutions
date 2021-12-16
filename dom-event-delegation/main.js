var taskList = document.querySelector('.task-list');
taskList.addEventListener('click', taskDone);

function taskDone(event) {
  console.log('event target:', event.target);
  console.log('event.target.tagName:', event.target.tagName);

  if (event.target.tagName === 'BUTTON') {
    var parent = event.target.closest('.task-list-item');
    console.log('closest .task.list.item:', parent);
    var item = document.querySelector('.task-list-item');
    item.remove();
  }
}
