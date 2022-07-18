import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const randomId = () => {
    return Math.floor(Math.random() * 100)
  }

  return(
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to={`/detail/${randomId()}`}>Detail</Link></li>
      </ul>
    </nav>
  )
}

export default Header
