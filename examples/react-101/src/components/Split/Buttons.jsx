import React from 'react'

const Buttons = (props) => {
  const { handleIncrease, handleDecrease } = props;
  return(
    <div>
      <button onClick={handleIncrease}>Incrementar</button>
      <button onClick={handleDecrease}>Decrementar</button>
    </div>
  )
}

export default Buttons
