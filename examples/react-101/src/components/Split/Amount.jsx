import React from 'react'

const Amount = (props) => {
  const { handleAmount } = props;
  return(
    <div>
      <p>Por favor ingrese la cantidad</p>
      <input type="number" name="amount" onChange={handleAmount}  />
    </div>
  )
}

export default Amount
