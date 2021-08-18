import React from 'react';
import styles from './Header.module.css';
import Searchbar from './Searchbar/Searchbar';

function Header(props) {
    return (
        <header className={`container ${styles.header}`}>
            <h1 className={styles.heading}>Noclegi</h1>
            <Searchbar searchHandler={props.searchHandler}/>
        </header>
    )
}

export default Header;