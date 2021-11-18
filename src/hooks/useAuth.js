import { useContext, useDebugValue } from "react";
import AuthContext from "../context/authContext";

export default function useAuth() {
    const authContext = useContext(AuthContext);
    const auth = authContext.isAuthenticated;
    const setAuth = (isAuthenticated, tokenData = null) => {
        if (isAuthenticated) {
            authContext.signIn();
            if(tokenData) {
                localStorage.setItem('token-data', JSON.stringify(tokenData));
            }
        }
        else {
            authContext.signOut();
            localStorage.removeItem('token-data');
        }
    }

    useDebugValue(auth ? 'Zalogowany' : 'Wylogowany');

    return [auth, setAuth];
}