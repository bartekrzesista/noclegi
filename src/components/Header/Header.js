import React from 'react';
import './Header.css';
import Searchbar from './Searchbar/Searchbar';

function Header() {
    return (
        <>
            <h1 className="header">header</h1>
            <Searchbar />
        </>
    )
}

export default Header;