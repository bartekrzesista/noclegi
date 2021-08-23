import React from 'react';

const ThemeContext = React.createContext({
    theme: 'primary',
    toggleTheme: () => {}
});

ThemeContext.displayName = 'ThemeContext';

export default ThemeContext;