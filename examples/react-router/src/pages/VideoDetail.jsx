import React from 'react'
import { useParams } from 'react-router-dom'

import Header from '../components/Header'

const VideoDetailPage = () => {
  const { id } = useParams()

  return(
    <div>
      <Header />
      <h1>Video Detail {id}</h1>
    </div>
  )
}

export default VideoDetailPage
