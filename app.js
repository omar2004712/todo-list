
function done(obj){
    obj.parentElement.classList.toggle('done');
    obj.parentElement.classList.toggle('todo');
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
            newTask.append(doneBtn)
            newTask.append(this.inputTaskSlot.value);
            this.TasksEl.append(newTask);
            this.errorMsg.innerText = '';
        }
        else{
            this.errorMsg.innerText = "sorry, you have to enter a task";
        }
    }

}
