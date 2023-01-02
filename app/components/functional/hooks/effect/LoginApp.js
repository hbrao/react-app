import React, { useContext } from 'react';

import Login from './Login/Login';
import Home from './Home/Home';
import MainHeader from './MainHeader/MainHeader';
import AuthContext from './context/auth-context';

function App() {
  const ctx = useContext(AuthContext);

  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;
