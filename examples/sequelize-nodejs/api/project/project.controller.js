const { getProjects, getProjectById, createProject } = require('./project.service')

async function index(req, res) {
  try {
    const projects = await getProjects();
    return res.json(projects);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

async function show(req, res) {
  try {
    const project = await getProjectById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    return res.json(project);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

async function create(req, res) {
  try {
    const user = await createProject(req.body);
    return res.json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = {
  index,
  show,
  create,
}
