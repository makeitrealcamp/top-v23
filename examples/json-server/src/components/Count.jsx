import {useState, useReducer} from 'react'


const initialState = {
  count: 0,
  status: 'active',
  isLoggin: false
}

const reducer = (state, action) => {
  debugger
  switch (action) {
    case 'increment':
      return {
        count: state.count + 1
      }
    case 'decrement':
      return {
        count: state.count - 1
      }
    case 'reset':
      return {
        count: 0,
        status: 'inactive'
      }
    case 'logout':
      return {
        isLoggin: false
    }

    default:
      return state
  }
}

const Count = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [count, setCount] = useState(0)
  const [isLoggin, setIsLoggin] = useState(false)


  const handleIncre= () => {
    // setCount(count + 1)
    // setIsLoggin(true)
    dispatch('increment')
  }

  const handleDecre= () => {
    // setCount(count - 1)
    dispatch('decrement')
  }

  return(
    <div>
      <h1>Count</h1>
      <p>el valor es {state.count}</p>
      <button onClick={handleIncre}>
        Incrementar
      </button>

      <button onClick={handleDecre}>
        Decrementar
      </button>
    </div>
  )
}

export default Count
