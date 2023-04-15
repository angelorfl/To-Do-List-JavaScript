const buttonNewTask = document.querySelector('.new-task button');
const taskBox = document.querySelector('.task-box');
const newTaskInput = document.querySelector('.new-task input');
const deleteTaskButton = document.querySelector('.task-item button');

buttonNewTask.addEventListener('click', addTask);
deleteTaskButton.addEventListener('click', deleteTask);

function addTask() {
    
    console.log(newTaskInput.value)   
    event.preventDefault();

    const taskItem = document.createElement('div');
    taskItem.classList.add('task-item');

    const inputItem = document.createElement('input');
    inputItem.type = 'checkbox';

    const taskItemText = document.createElement('p');
    taskItemText.innerText = newTaskInput.value;

    const buttonTrash = document.createElement('button');
    
    const trashItem = document.createElement('i');
    trashItem.classList.add('fa');
    trashItem.classList.add('fa-trash');

    taskItem.appendChild(inputItem);
    taskItem.append(taskItemText);
    taskItem.appendChild(buttonTrash);
    buttonTrash.appendChild(trashItem);
    taskBox.appendChild(taskItem);
    newTaskInput.value = '';
};

function deleteTask (e){
    console.log(e);
    e.target.parentElement.parentElement.remove();
};


