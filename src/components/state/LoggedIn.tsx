import { useState } from "react";

const LoggedIn = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLogin = () => {
        setIsLoggedIn(true)
    }
    const handleLogout = () => {
        setIsLoggedIn(false)
    }

  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>logout</button>
        <h3>User is {isLoggedIn ? 'logged in' : 'logged out'} </h3>
    </div>
  )
}

export default LoggedIn