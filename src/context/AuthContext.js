import React, {useState, createContext} from 'react';
import {useHistory} from "react-router-dom";

export const AuthContext = createContext({});

function AuthContextProvider({children}) {
    const [isAuth, toggleIsAuth] = useState(false);
    const history = useHistory();

    function signIn() {
        toggleIsAuth(true);
        history.push("./")

    }

    function signOut() {
        toggleIsAuth(false);
        history.push("./")

    }

    const data = {
        signIn: signIn,
        signOut: signOut,
        isAuth: isAuth
    }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;