import { useState} from 'react'

const Timer = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString())

  // const interval = setInterval(() => {
  //   setTime(new Date().toLocaleTimeString())
  // }, 5000)

  // console.log("🚀 ~ file: Timer.jsx ~ line 9 ~ interval ~ interval", interval)

  return(
    <div>
      <h1>Time {time}</h1>
    </div>
  )
}

export default Timer
