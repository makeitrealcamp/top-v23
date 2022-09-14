import Head from 'next/head'
import Link from 'next/link'
import { gql, useQuery, useLazyQuery } from '@apollo/client'

import styles from '../styles/Home.module.css'
import { useEffect } from 'react'

const ME = gql`
  query Me{
    me{
      name
      currentPets {
        id
        name
        category
      }
      checkoutHistory {
        checkInDate
        checkOutDate
      }
    }
  }
`

const CATEGORIES = {
  DOG: '🐶',
  CAT: '🐱',
  RABBIT: '🐰',
  STINGRAY: '🐳',
}

function Home() {
  const [getMeInfo, { data, loading, error } ]= useLazyQuery(ME)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage?.getItem('token')
      const context = {
        headers: {
          authorization: token ? `Bearer ${token}` : ''
        }
      }

      getMeInfo({ context })
    }

  }, [getMeInfo])

  return (
    <div className={styles.container}>
      <Head>
        <title>Pet librar | Mey</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>{data?.me.name} 🐶</h1>
        <ul>
          {
            data?.me.currentPets.map(pet => (
              <li key={pet.id}>
                <strong>{pet.name}</strong> : {CATEGORIES[pet.category]}
              </li>
            ))
          }
        </ul>
      </main>
    </div>
  )
}


export default Home
