import React from 'react'
import { Link } from 'react-router-dom'

const User = (props) => {
  const { user, full } = props

  // const slug = user.name.toLowerCase().replace(/ /g, '-')

  return(
    <div className="user-content">
      {
        full ? (
          <div className="user-full">
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            {
              full
              ? (
                  <div>
                    <p><b>Address:</b> {user.address.street}</p>
                    <p>{user.address.suite}</p>
                    <p><b>City:</b>{user.address.city}</p>
                  </div>
              ) : null
            }
          </div>
        ) : (
          <Link to={`/users/${user.id}`}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            {
              full
              ? (
                  <div>
                    <p><b>Address:</b> {user.address.street}</p>
                    <p>{user.address.suite}</p>
                    <p><b>City:</b>{user.address.city}</p>
                  </div>
              ) : null
            }
          </Link>
        )
      }

    </div>
  )
}

export default User
