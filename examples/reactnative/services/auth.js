
const API_URL = 'http://192.168.1.8:8080';


export const login = ({email, password}) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({email, password}),
  }

  return fetch(`${API_URL}/auth/local/login`, options)
}
