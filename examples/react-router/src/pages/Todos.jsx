import React, { useState } from 'react'

const data = [
  { id: 1, title: 'Todo 1', completed: false },
  { id: 2, title: 'Todo 2', completed: false },
  { id: 3, title: 'Todo 3', completed: false },
  { id: 4, title: 'Todo 4', completed: false },
  { id: 5, title: 'Todo 5', completed: false },
]

const TodosPage = () => {
  const [todos, setTodos] = useState(data);

  const checked = (id) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })

    setTodos(newTodos);
  }

  const handleDelete = () => {
    const newTodos = todos.filter(todo => todo.completed === false);
    setTodos(newTodos);
  }


  return(
    <div>
      <h1>Todos</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <label>
              {todo.title}
              <input type="checkbox" onChange={ () => { checked(todo.id) } } />
            </label>

          </li>
        ))}
      </ul>

      <button onClick={handleDelete}>
        Delete items completd
      </button>
    </div>
  )
}

export default TodosPage
