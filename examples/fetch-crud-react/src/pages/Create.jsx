import { useState } from 'react'

import { createUser } from '../services/users'

const CreatePage = () => {
  const [user, setUser] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    const copy = user

    const newUser = {
      ...copy,
      [name]: value
    }

    setUser(newUser)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const data = {
        ...user,
        role: 'user'
      }

      await createUser(data)
      alert('User created')
    } catch (error) {
      alert(error)
    }
  }

  return(
    <div>
      <h1>Form user</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>nombre:</label>
          <input type="text" name="name" placeholder='enter name' onChange={handleChange} />
        </div>
        <div>
          <label>correo:</label>
          <input type="email" name="email" placeholder='enter email' onChange={handleChange} required />
        </div>
        <div>
          <label>Nombre Usuario:</label>
          <input type="text" name="username" placeholder='user name' onChange={handleChange}/>
        </div>

        <button type="submit">
          Create user
        </button>
      </form>
    </div>
  )
}

export default CreatePage
