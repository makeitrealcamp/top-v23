import { gql, useQuery } from '@apollo/client'

const ALL_PETS = gql`
  query GetAllPets ($category: PetCategory $status: PetStatus){
    allPets (status: $status category: $category){
      id
      name
      status
      weight
      category
    }
    totalPets
  }
`

const CATEGORIES = {
  DOG: '🐶',
  CAT: '🐱',
  RABBIT: '🐰',
  STINGRAY: '🐳',
}

const AllPets = (props) => {
  const { status, category } = props;
  const { loading, error, data } = useQuery(ALL_PETS, { variables: { status, category } })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <ul>
      {
        data.allPets.map(pet => (
          <li key={pet.id}>
            <strong>
              {CATEGORIES[pet.category]} {pet.name}
            </strong> : {pet.weight} kg
          </li>
        ))
      }
    </ul>
  )
}

export default AllPets;
