const tasksEl = document.querySelector('#tasks-el')

function done(obj){
    obj.parentElement.classList.toggle('done');
    obj.parentElement.classList.toggle('todo');
}

function deleteTask(obj){
    obj.parentElement.remove()
}

function clearTasks(tasks){
    tasks.innerHTML = '';
}

const inputTask = {
    errorMsg: document.querySelector('#error-msg'),
    inputTaskSlot: document.querySelector('#input-task-slot'),
    inputTaskEl: document.querySelector('#input-task-el'),
    TasksEl: document.querySelector('ul'),
    addTask(){
        if(this.inputTaskSlot.value !== ''){
            const newTask = document.createElement('li');
            newTask.classList.add('todo');
            const doneBtn = document.createElement('input');
            doneBtn.type = "checkbox";
            doneBtn.setAttribute('onclick','done(this)');
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = "delete task";
            deleteBtn.style.marginLeft = '1em';
            deleteBtn.setAttribute('onclick' ,'deleteTask(this)');
            newTask.append(doneBtn)
            newTask.append(this.inputTaskSlot.value);
            newTask.append(deleteBtn);
            this.TasksEl.append(newTask);
            this.errorMsg.innerText = '';
            this.inputTaskSlot.value = '';
        }
        else{
            this.errorMsg.innerText = "sorry, you have to enter a task";
        }
    }

}


const input = document.querySelector('#input-task-slot');

input.addEventListener('keypress', (e)=>{
    if(e.key === 'Enter'){
        inputTask.addTask();
    }
})