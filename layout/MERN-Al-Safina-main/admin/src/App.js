import React, { } from 'react'
import { LoggedInRouter, LoggedOutRouter } from "./Routes/routes"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"

import { AuthContext } from "./Components/Authentication/authContext";
import { useAuth } from "./Components/Hooks/AuthHook"

function App() {
  const { login, logout, isLoggedIn, userId } = useAuth()
  return (
    <div className="App">
      <AuthContext.Provider
        value={{
          isLoggedIn: isLoggedIn,
          userId: userId,
          login: login,
          logout: logout,
        }}
      >
        {isLoggedIn ?
          <LoggedInRouter /> : <LoggedOutRouter />}
      </AuthContext.Provider>
    </div >
  );
}

export default App;