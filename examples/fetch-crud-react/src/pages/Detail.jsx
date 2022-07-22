import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { getUser } from '../services/users'
import User from '../components/User'

const DetailPage = () => {
  const [user, setUser] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      const result = await getUser(id)
      setUser(result)
    }

    fetchData()
  }, [id])

  return(
    <div>
      { user ? <User user={user} full /> : <p>loading...</p> }
    </div>
  )
}

export default DetailPage
