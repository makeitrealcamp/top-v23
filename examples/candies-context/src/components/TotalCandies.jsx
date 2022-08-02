import { useSelector } from 'react-redux'


const TotalCandies = () => {
  const { candy1, candy2, candy3  } = useSelector((miEstadito) => miEstadito)

  return(
    <div>
      <h1>Total Candies</h1>
      <ul>
        <li>m&m: {candy1}</li>
        <li>Nerds: {candy2}</li>
        <li>Jolly Rancher: {candy3}</li>
      </ul>
    </div>
  )
}

export default TotalCandies
