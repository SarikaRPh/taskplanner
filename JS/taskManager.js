//creat createtaskhtml 
const createTaskHtml = (myName, floatingTextarea2, assign, status1, date, id ) => {
    const html = ` 
    
    <div class="card mt-5 me-2"  style="width: 25rem;" data-task-id="${id}" >
      <div class=" h-100">

      <div class="card-body">
        <h5 class="card-text fw-bold d-inline">Task Name : </h5>
        <p class="d-inline">${myName}</p>
        <p class="card-text mt-4"> <strong>Description :</strong> </p>
        <p class="card-text">${floatingTextarea2}</p>
        <p class="card-text"><strong>Assigned To :</strong> ${assign} </p>
        <p class="card-text"><strong>Status :</strong> ${status1}</p>
        <p class="card-text"><strong>Date :</strong> ${date}</p>
        
        
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <button class="btn btn-primary done-button" type="button">Done</button>
          <button class="btn btn-primary me-md-2" type="button">Edit</button>
          <button class="btn btn-primary" type="button">Delete</button>
          
        </div>
        </div>
        </div>
        </div>

      `;
    return html;

}

//create taskManager
class TaskManager {
    constructor(currentId = 0){
        this._tasks = [];
        this.currentId = currentId;
        
    }

    //method to get task ID
    getTaskById(taskId){
        let foundTask;
        for(let i=0; i<this.tasks.length; i++){
            let task = this.tasks[i];
            if(task.id === taskId){
                foundTask = task;
            }
         }
         return foundTask;
    }
    
    //function to add task
    addTask(myName, floatingTextarea2, assign, status1, date){
             
        const newTask = {
            id: this.currentId++,
            myName: myName,
            floatingTextarea2: floatingTextarea2,
            assign: assign,
            status1: status1,
            date: date
        };
        this._tasks.push(newTask);


    }

    get tasks(){
        return this._tasks;
    }
    //add render method
    render(){
       
    let tasksHtmlList =[];
    for(let i=0; i<this.tasks.length; i++){
        let currentTask = this.tasks[i];
        let date = new Date(currentTask.date);
        let formatDate = (date.getDate() +  "/" +(date.getMonth()+1 )+ "/" + date.getFullYear()); 
        let taskHtml = createTaskHtml(currentTask.myName, currentTask.floatingTextarea2, currentTask.assign, currentTask.status1, formatDate, currentTask.id);
        tasksHtmlList.push(taskHtml);
    }
    let newTaskhtml = tasksHtmlList.join('\n');
    const html = document.querySelector('#html');
    html.innerHTML = newTaskhtml;
    }

}



