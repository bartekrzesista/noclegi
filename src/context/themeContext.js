import React from 'react';

const ThemeContext = React.createContext({
    theme: 'primary',
    toggleTheme: () => {}
});

export default ThemeContext;