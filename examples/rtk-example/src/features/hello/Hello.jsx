import { useSelector } from 'react-redux';

const Hello = (props) => {
  const counter = useSelector(state => state.counter.value);
  return(
    <div>
      {counter}
    </div>
  )
}

export default Hello
