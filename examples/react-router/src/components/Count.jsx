import React, { useEffect, useState} from 'react'
import { Link } from 'react-router-dom'


const Count = () => {
  const [count, setCount] = useState(0)

  // Renderiza
  return (
    <div>
      <h1>Count</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/count">Count</Link></li>
        </ul>
      </nav>

      <p>{count}</p>
      <div id="elem">hola</div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  )
}

export default Count
