import React from 'react';
import styles from './Header.module.css';
import Searchbar from './Searchbar/Searchbar';

function Header() {
    return (
        <header className={`container ${styles.header}`}>
            <h1 className={styles.heading}>Noclegi<span className={styles.headingBackground}></span></h1>
            <Searchbar />
        </header>
    )
}

export default Header;