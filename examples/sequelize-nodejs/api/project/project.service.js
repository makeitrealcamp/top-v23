const Project = require('./project.model');

const Task = require('../task/task.model');

async function getProjects() {
  const projects = await Project.findAll();
  return projects;
}

async function createProject(project) {
  const newProject = await Project.create(project);
  return newProject;
}

async function getProjectById(id) {
  const project = await Project.findByPk(id, {
    include: {
      model: Task,
      attributes: ['id', 'name', 'isDone'],
    },
  });


  return project;
}

module.exports = {
  getProjects,
  createProject,
  getProjectById,
}
