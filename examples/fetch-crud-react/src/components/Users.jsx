import React from 'react'

import User from './User'

const UserList = (props) => {
  const { list } = props
  return(
    <div className="user-list">
      {list.map(item => (
        <User key={item.id} user={item} />
      ))}
    </div>
  )
}

export default UserList
