import { useState, useEffect} from 'react'

import CharacterCard from '../components/CharacterCard'

import { getCharacters } from '../services/characters'

const CharactersPage = () => {
  const [characters, setCharacters] = useState([])

  // Effect to fetch the characters from the API

  return(
    <div className="App-header">
      <h1>CharacterDetailPage</h1>
      <section className="showcase__Wrapper">
        <section className="showcase__Inner">
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
        </section>
      </section>
    </div>
  )
}

export default CharactersPage
