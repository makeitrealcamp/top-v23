import { useSelector, useDispatch } from 'react-redux'

import { actionIncrement, actionDecrement, actionReset } from '../store'

const Counter = () => {
  const dispatch = useDispatch()
  const count = useSelector(state => state)

  const handleClickIncrement = () => {
    dispatch(actionIncrement)
  }

  const handleClickDecrement = () => {
    dispatch(actionDecrement)
  }

  const handleClickReset = () => {
    dispatch(actionReset)
  }

  return(
    <div>
      <h1>{count}</h1>
      <button onClick={handleClickIncrement}>
        +
      </button>
      <button onClick={handleClickDecrement}>
        -
      </button>
      <button onClick={handleClickReset}>
        reset
      </button>
    </div>
  )
}

export default Counter
