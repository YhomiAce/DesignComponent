import { useContext } from "react";
import { UserContext } from "./UserContext";

const UserData = () => {
   const userContext = useContext(UserContext);
    const handleLogin = () => {
            userContext.setUser({
                name: "Test One",
                email: "test@test.com"
            });
    }
    const handleLogout = () => {
            userContext.setUser(null);
    }    

  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>logout</button>
        <h3>User name is {userContext?.user?.name} </h3>
        <h3>User email is {userContext?.user?.email} </h3>
    </div>
  )
}

export default UserData