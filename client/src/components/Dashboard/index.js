import React from 'react';


export default function Dashboard({ loggedIn, setLoggedIn }) {
  return (
    <div>
      
      {loggedIn ? (
        <div>
          <span role="img" aria-label="tada">
            🎉
          </span>
          <h3>You are signed in!</h3>
          <button type="button" onClick={() => setLoggedIn(!loggedIn)}>
            Log out
          </button>
        </div>
      ) : (
        <div>
          <span role="img" aria-label="stopsign">
            🛑
          </span>
          <h3>You are currently logged out</h3>
          <button type="button" onClick={() => setLoggedIn(!loggedIn)}>
            Log in
          </button>
        </div>
      )}
    </div>
  );
}
