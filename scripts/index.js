

// class Router{

//   pages = [
    
//   ]

//   contrsuctor(){
//     this.hash = window.location.hash;
//     this.setPage();
//     window.addEventListener('hashchange', router);
//   }
  
//   onHashChange = () => {
//     this.hash = window.location.hash;
//     this.setPage()
//   }

// }

// new Router();


class TaskManager{
  tasks = [];

  constructor(){
    this.tasks = [
      new Task('Подготовить презентацию', 'Важный проект', ['tag 1', 'tag 2'], 'Сегодня', document.querySelector('.tasks')),
      new Task('Подготовить еще одну', 'Важный проект', ['tag 1', 'tag 3'], 'Сегодня', document.querySelector('.tasks')),
    ];
    this.renderTasks();
  }

  renderTasks(){
    this.tasks.forEach((task) => {
      task.renderTask();
    });
  }

}

document.addEventListener('DOMContentLoaded', ()=>{
  new TaskManager();
});

