document.addEventListener('DOMContentLoaded', initalize)

function initalize(){
  const createTaskForm = document.getElementById('create-task-form')
  return createTaskForm.addEventListener('submit', createNewTask)
}

function createNewTask(event){
  event.preventDefault()
  const newTaskDescription = document.getElementById('new-task-description')
  const newTask = document.createElement('li')

  newTask.innerText = newTaskDescription.value
  appendNewTask(newTask)
}

function appendNewTask(task){
  document.getElementById('tasks').append(task)
}
