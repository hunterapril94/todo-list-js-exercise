// Arrays to keep track of each task's state
const tasks = []

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  tasks.push({
    title: title,
    description: description,
    taskComplete: false,
    logState: function () {
      const title = this.title;
      const complete = this.taskComplete;
      console.log(`${title} has${complete ? " " : " not "}been completed`);
    },
    completeTask: function () {
      this.taskComplete = true;
    },
  })
}


// DRIVER CODE BELOW

newTask("Clean Cat Litter", "Clean out the litterbox"); // task 0
newTask("Do Laundry", "wash all clothes"); // task 1
tasks[0].logState(); // Clean Cat Litter has not been completed
tasks[0].completeTask();
tasks[0].logState(); // Clean Cat Litter has been completed
