import React from 'react';
import styles from './Header.module.css';
import withMousePosition from '../../hoc/withMousePosition';

function Header(props) {
    return (
        <header className={styles.header}>
            <h1 className={styles.heading}>Noclegi</h1>
            <div className="text-light">
                {props.mouseX}
                <br />
                {props.mouseY}
            </div>
            {props.children}
        </header>
    )
}

export default withMousePosition(Header);