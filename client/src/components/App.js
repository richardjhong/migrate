import React, { useState } from 'react';
import Dashboard from './components/Dashboard';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return <Dashboard loggedIn={loggedIn} setLoggedIn={setLoggedIn} />;
}

export default App;
