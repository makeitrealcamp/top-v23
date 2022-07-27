import { useNumber } from './NumberContext'

const Text = () => {
  const { counter } = useNumber();
  return(
    <h1>
      El valor del context counter es {counter}
    </h1>
  )
}

export default Text
