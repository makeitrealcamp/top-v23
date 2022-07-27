import { useContextCounter } from './ContextCounter'

const Badge = () => {
  const context = useContextCounter()

  return(
    <span className="badge">{context.count}</span>
  )
}

export default Badge
