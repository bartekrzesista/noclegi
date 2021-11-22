import { useContext, useDebugValue } from "react";
import AuthContext from "../context/authContext";

export default function useAuth() {
    const authContext = useContext(AuthContext);
    const auth = authContext.user;
    const setAuth = (user) => {
        if (user) {
            authContext.signIn(user);
            localStorage.setItem('token-data', JSON.stringify(user));
        }
        else {
            authContext.signOut();
            localStorage.removeItem('token-data');
        }
    }

    useDebugValue(auth ? 'Zalogowany' : 'Wylogowany');

    return [auth, setAuth];
}