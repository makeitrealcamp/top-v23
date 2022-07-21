import { useState, useEffect } from 'react'

const RequestFetchExample = (props) => {
  const [tasks, setTasks] = useState([])

  // useEffect(() => {
  //   const getTodos = async () => {
  //     try {
  //       const response = await fetch('https://jsonplaceholder.typicode.com/todos')
  //       const data = await response.json()
  //       setTasks(data)
  //     } catch (error) {
  //       console.log('error', error)
  //     }
  //   }

  //   getTodos()
  // }, [])


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => setTasks(data))
      .catch(error => console.log('error', error))
  }, [])


  return(
    <div>
      {tasks.map(todo => (
        <div key={todo.id}>
          {todo.title}
        </div>
      ))}
    </div>
  )
}

export default RequestFetchExample
