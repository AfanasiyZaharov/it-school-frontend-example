function makeid(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}


class Task{
  constructor (name, project, tags, date, placeToRender){
    this.name=name;
    this.project = project;
    this.tags = tags;
    this.date = date;
    this.place = placeToRender;
    this.id = makeid(11);
    this.completed = false;
  }


  renderTask = () => {
    if(this.mainElement){
      return;
    }
    const html = this.taskTemplate();
    this.place.insertAdjacentHTML('beforeend', html);
    this.mainElement = this.place.querySelector(`#${this.id}`);
    this.addListeners();
  }

  addListeners = () => {
    this.mainElement.querySelector('.task-status').addEventListener('click', this.complete);
  }

  complete = (event) => {
    if (this.completed) {
      return;
    }
    this.completed = true;
    event.target.classList.add('task-status-complete');
    this.mainElement.classList.add('task-status-complete');
  }

  taskTemplate = () => {
    return `
      <div class="task-wrapper" id="${this.id}">
        <div class="task-upper-wrapper">
          <div class="task-status ">
              <div></div>
            </div>
            <div class="task-name">${this.name}</div>
        </div>
        <div class="task-settings">
          <div class="task-date">
            ${this.date}
          </div>
          <div class="task-project">
            ${this.project}
          </div>
          <div class="task-tags">
            ${this.tags.map((tag)=> (`
              <div class="tag">${tag}</div>
            `)).join(' ')}
          </div>
        </div>
      </div>
    `
  }
}