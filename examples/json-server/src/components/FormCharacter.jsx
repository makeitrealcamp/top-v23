import { useNavigate } from 'react-router-dom'

import useForm from '../hooks/useForm'
import { createCharacter } from '../services/characters'

const status = [
  'Alive',
  'Dead',
  'Unknown'
]
const species = [
  'Human',
  'Mythological Creature',
  'Alien',
  'Robot',
  'Unknown',
]

const origins = [
  {
    "id": 1,
    "name": "Citadel of Ricks",
    "url": "https://rickandmortyapi.com/api/location/3"
  },
  {
    "id": 2,
    "name": "Earth (Replacement Dimension)",
    "url": "https://rickandmortyapi.com/api/location/20"
  },
  {
    "id": 3,
    "name": "unknown",
    "url": ""
  }
]

const FormCharacter = () => {
  const [form, handleChange] = useForm({})

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Note: You must create a structure similar to a character database item
    // you can add the fields that are not obtained from the form manually


    // after creating a new character redirect to the characters page
    // await createCharacter(form)
    console.log(form)
  }

  return(
    <div>
      <h1>Create a new character</h1>
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <br />
          <input type="text" className="form-control" id="name" name="name" placeholder="Enter name" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="status">Status</label>
          <br />
          <select name="status" id="status" onChange={handleChange}>
            <option value="">Select option</option>
            {status.map(status => (
              <option key={status} value={status}>{status}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="species">Specie</label>
          <br />
          <select name="species" id="species" onChange={handleChange}>
            <option value="">Select option</option>
            {species.map(specie => (
              <option key={specie} value={specie}>{specie}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="origin">Origin</label>
          <br />
          <select name="origin" id="origin" onChange={handleChange}>
            <option value="">Select option</option>
            {origins.map(origin => (
              <option key={origin.id} value={origin.id}>{origin.name}</option>
            ))}
          </select>
        </div>
        <br />
        <br />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default FormCharacter
