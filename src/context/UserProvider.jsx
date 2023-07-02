import { useState } from "react"
import { UserContext } from "./UserContext"
import { light } from "../styles/Themes";

export const UserProvider = ({ children }) => {

    const [theme, setTheme] = useState(light);

    return (
        <UserContext.Provider value={{ theme, setTheme }}>
            {children}
        </UserContext.Provider>
    )
}