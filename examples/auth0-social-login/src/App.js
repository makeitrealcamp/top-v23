import { useAuth0 } from "@auth0/auth0-react";

import logo from './logo.svg';
import './App.css';
import { useEffect } from "react";

function App() {
  const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0();


  return (
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />

      {
        isAuthenticated ? (
          <>
            <h1>Welcome {user.name}</h1>
            <div>
              <img src={user.picture} alt={`Avatar ${user.name}`} />
            </div>
            <button onClick={logout}> Logout </button>
          </>
        ) : (
          <>
            <button onClick={() => loginWithRedirect()}>
              Login Default Auth0
            </button>
            <button onClick={() => loginWithRedirect({connection: "google-oauth2"})}>
              Login Google
            </button>
            <button onClick={() => loginWithRedirect({ connection: 'facebook' })}>
              Login Facebook
            </button>
          </>
        )
      }
    </div>
  );
}

export default App;
