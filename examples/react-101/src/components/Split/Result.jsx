import React from 'react'

const Result = (props) => {
  const { total } = props;
  return(
    <div>
      <h2>El resultado es: {total}</h2>
    </div>
  )
}

export default Result
