import { useState, useEffect } from "react"

import Head from "next/head"
import Link from "next/link"

const AboutPage = (props) => {
  const [users, setUsers] = useState(props.users)


  const getUsers = async () => {
    const res = await fetch("/api/users")
    console.log('llego')
    const data = await res.json()
    setUsers(data)
  }

  return(
    <div>
      <Head>
        <title>About Page</title>
        <meta name="description" content="This is the about page" />
      </Head>
      <h1>About Page</h1>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>
              <a>{user.name}</a>
            </Link>
          </li>
        ))}
      </ul>

      <Link href="/login">
        <a>Login</a>
      </Link>

      <button onClick={getUsers}>
        Click me
      </button>
    </div>
  )
}

// export async function getServerSideProps() {
//   const res = await fetch("http://localhost:3000/api/users")
//   const data = await res.json()

//   return {
//     props: {
//       users: data
//     }
//   }
// }

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await res.json()

  return {
    props: {
      users: data
    }
  }
}

export default AboutPage
