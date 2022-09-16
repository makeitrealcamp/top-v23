const Task = require('./task.model');


async function getTasks() {
  const tasks = await Task.findAll();
  return tasks;
}

async function createTask(task) {
  const newTask = await Task.create(task);
  return newTask;
}

module.exports = {
  getTasks,
  createTask,
}
