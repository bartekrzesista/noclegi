import { render, screen } from '@testing-library/react';
import Menu from './Menu';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthContext from '../../context/authContext';

describe('Menu component', () => {
    test('renders Sign in if user is null', () => {
        render(
            <Router>
                <Menu />
            </Router>
        );
        const link = screen.getByText(/Zaloguj/i);
        expect(link).toBeInTheDocument();
    });
    
    test('renders Sign out if user exists', () => {
        render(<AuthContext.Provider value={{
            user: true,
            signIn: () => {},
            signOut: () => {},
          }}>
            <Router>
                <Menu />
            </Router>
        </AuthContext.Provider>);
        const link = screen.getByText(/Wyloguj/i);
        expect(link).toBeInTheDocument();
    });
});
