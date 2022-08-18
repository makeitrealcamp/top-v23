const users = [
  {
    id: 1,
    name: "cristian moreno",
    email: "k@lo.com"
  }
]

function getAllUsers(req, res){
  return res.json(users)
}

function getSingleUser(req, res){
  const { id } = req.params;

  const user = users.find(user => user.id === parseInt(id));

  if(!user){
    return res.status(404).json({ message: `User with id ${id} not found` })
  }

  return res.json(user)
}

function createUser(req, res){
  const { name, email } = req.body;

  const newUser = {
    id: users.length + 1,
    name,
    email
  }

  users.push(newUser);

  return res.json(newUser)
}

function updateUser(req, res){
  const { id } = req.params;
  const { name, email } = req.body;

  const user = users.find(user => user.id === parseInt(id));

  if(!user){
    return res.status(404).json({ message: `User with id ${id} not found` })
  }

  user.name = name;
  user.email = email;

  return res.json(user)
}

function deleteUser(req, res){
  const { id } = req.params;

  const user = users.find(user => user.id === parseInt(id));

  if(!user){
    return res.status(404).json({ message: `User with id ${id} not found` })
  }

  users.splice(users.indexOf(user), 1);

  return res.json({ message: `User with id ${id} deleted` })
}

module.exports = {
  getAllUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
}


