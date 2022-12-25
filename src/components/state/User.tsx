import { useState } from "react";

type AuthUser = {
    name: string
    email: string
}

const User = () => {
    const [user, setUser] = useState<null | AuthUser>(null)
    const [person, setPerson] = useState<AuthUser>({} as AuthUser) // Type assertion
    
    const handleLogin = () => {
        setUser({
            name: "John Doe",
            email: "jdoe@gmail.com"
        })
        setPerson({
            name: "John Doe",
            email: "jdoe@gmail.com"
        })
    }
    const handleLogout = () => {
        setUser(null)
    }
    console.log(person);
    

  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>logout</button>
        <h3>User name is {user?.name} </h3>
        <h3>User email is {user?.email} </h3>
    </div>
  )
}

export default User