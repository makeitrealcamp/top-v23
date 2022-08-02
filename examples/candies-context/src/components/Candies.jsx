import { useDispatch } from 'react-redux'

import {
  addVoteCandy1,
  addVoteCandy2,
  addVoteCandy3,
} from '../store/actions'
import CandyButton from './CandyButton'

const data = [
  {
    id: 1,
    title: 'M&Ms',
    img: 'https://jumbocolombiaio.vtexassets.com/arquivos/ids/367869-800-600?v=637889251316970000&width=800&height=600&aspect=true',
  },
  {
    id: 2,
    title: 'Nerds',
    img: 'https://m.media-amazon.com/images/I/61SRR9W3ZwL._SL1000_.jpg',
  },
  {
    id: 3,
    title: 'Jolly Ranchers',
    img: 'http://cdn.shopify.com/s/files/1/0972/7116/products/41qmeekKg_L._SS800_600x.jpg?v=1655743528',
  }
]

const Candies = () => {
  const dispatch = useDispatch()

  const handleAddVoteCandy1 = () => {
    dispatch(addVoteCandy1())
  }
  const handleAddVoteCandy2 = () => {
    dispatch(addVoteCandy2(3))
  }
  const handleAddVoteCandy3 = () => {
    dispatch(addVoteCandy3(10))
  }

  return(
    <div>
      <CandyButton handleClick={handleAddVoteCandy1}>
        <img src={data[0].img} alt={data[0].title} width={200} height={200} />
      </CandyButton>
      <CandyButton handleClick={handleAddVoteCandy2}>
        <img src={data[1].img} alt={data[1].title} width={200} height={200} />
      </CandyButton>
      <CandyButton handleClick={handleAddVoteCandy3}>
        <img src={data[2].img} alt={data[2].title} width={200} height={200} />
      </CandyButton>
    </div>
  )
}

export default Candies
