import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const randomId = () => {
    return Math.floor(Math.random() * 100)
  }

  return(
    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li>
          <NavLink
            to={`/product/2`}
            style={({ isActive }) => {
              console.log("🚀 ~ file: Header.jsx ~ line 21 ~ Header ~ isActive", isActive)
              return {
                color: isActive ? 'red' : 'black'
              }
            }}
          >
              Detail
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Header
