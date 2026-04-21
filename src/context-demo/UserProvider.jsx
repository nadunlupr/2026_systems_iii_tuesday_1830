import { createContext, useContext } from "react";

const UserContext = createContext();

export function UserProvider({user, children}) {
    return (
        <UserContext.Provider value={user} >
            {children}
        </UserContext.Provider>
    )
}

export function useUser() {
    // const user = useContext(UserContext);
    // if(!user){console.log("")}
    // return user;
    return useContext(UserContext);
}
