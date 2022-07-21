import {useState, useEffect} from 'react'

const Pomodore = (props) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 5000)


    return () => {
      clearInterval(interval)
    }
  })


  return(
    <div>
      <h1>El time es {time}</h1>
    </div>
  )
}

export default Pomodore
