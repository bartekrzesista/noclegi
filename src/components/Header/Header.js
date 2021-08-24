import React from 'react';
import styles from './Header.module.css';
import withMousePosition from '../../hoc/withMousePosition';

function Header(props) {
    const parallax = {
        transform: `translate(${props.mouseX/60}px, ${props.mouseY/120}px)`
    }

    return (
        <header className={styles.header}>
            <div className={styles.headerBackground} style={parallax}></div>
            <h1 className={styles.heading}>Noclegi</h1>
            {props.children}
        </header>
    )
}

export default withMousePosition(Header);