import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

import '../styles/globals.css'

const client = new ApolloClient({
  uri: 'https://pet-library.moonhighway.com/',
  cache: new InMemoryCache(),
});

// const GET_LOCATIONS = gql`
//   query GetLocations {
//     locations {
//       id
//       name
//       description
//       photo
//     }
//   }
// `

// client
//   .query({
//     query: GET_LOCATIONS
//   })
//   .then(result => console.log(result));

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
