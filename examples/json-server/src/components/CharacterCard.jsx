import React from 'react'

const CharacterCard = (props) => {
  return(
    <article className="characterCard__Wrapper">
      <div className="characterCard__ImgWrapper">
        <img src="https://rickandmortyapi.com/api/character/avatar/40.jpeg" alt="Beth's Mytholog" />
      </div>
      <div className="characterCard__ContentWrapper">
        <div className="section">
          <a href="https://rickandmortyapi.com/api/character/40" rel="nofollow noopener noreferrer" target="_blank">
            <h2>Beth's Mytholog</h2>
          </a>
          <span className="status">
            <span className="status__icon"></span> Dead - Mythological Creature
          </span>
        </div>
        <div className="section">
          <span className="text-gray">Last known location:</span>
          <p className="text-white">
            Nuptia 4
          </p>
        </div>
      </div>
    </article>
  )
}

export default CharacterCard
