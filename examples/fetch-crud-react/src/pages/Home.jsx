import { useEffect, useState } from 'react'

import UserList from '../components/Users'

import { getUsers } from '../services/users'

const HomePage = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await getUsers()
      setUsers(result)
    }

    fetchData()
  }, [])

  return(
    <div>
      <UserList list={users} />
    </div>
  )
}

export default HomePage
