
class TaskManager{
  tasks = [];

  constructor(){
    this.tasks = [
      new Task('Подготовить презентацию', 'Важный проект', ['tag 1', 'tag 2'], 'Сегодня', document.querySelector('.tasks')),
      new Task('Подготовить еще одну', 'Важный проект', ['tag 1', 'tag 3'], 'Сегодня', document.querySelector('.tasks')),
    ];
    this.renderTasks();
    this.modal = document.querySelector('.modal-base');
    this.addListeners();
  }

  renderTasks(){
    this.tasks.forEach((task) => {
      task.renderTask();
    });
  }

  addListeners(){
    document.querySelector('#add-task').addEventListener('click', ()=>{
      this.insertModal();
    });

    document.querySelector('#close-modal').addEventListener('click', ()=>{
      this.closeModal();
    });

    document.querySelector('#add-task-final').addEventListener('click', () =>{
      this.createTask();
    });
  }

  insertModal = () => {
    this.modal.classList.remove('hidden');
  }

  createTask = () => {
    const task = new Task(document.querySelector('#name').value, document.querySelector('#project').value, [], 'Сегодня', document.querySelector('.tasks'));
    this.tasks.push(task);
    this.renderTasks();
    this.closeModal();
  }

  closeModal = () => {
    this.modal.classList.add('hidden');
    document.querySelector('#name').value = "";
    document.querySelector('#project').value = "";
  }
}

document.addEventListener('DOMContentLoaded', ()=>{
  new TaskManager();
});

