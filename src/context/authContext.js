import React from 'react';

const AuthContext = React.createContext({
    isAuthenticated: false,
    signIn: () => {},
    signOut: () => {}
});

AuthContext.displayName = 'AuthContext';

export default AuthContext;