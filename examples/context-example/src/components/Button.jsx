import { useContextCounter } from './ContextCounter'

const Button = ({ title, children, onClick }) => {
  const context = useContextCounter()

  const handleClick = () => {
    const { count, setCount } = context
    setCount(count + 1)
  }

  return(
    <div onClick={handleClick}>
      {children}

      <p>El valor del context es {context.count}</p>
    </div>
  )
}

export default Button
