import React from 'react'

const CandyButton = ({ handleClick, children }) => {
  return(
    <button onClick={handleClick}>
      {children}
    </button>
  )
}

export default CandyButton
