import React from 'react';
import {Component} from 'react';
import Hotel from './Hotel/Hotel';
import styles from './Hotels.module.css';

class Hotels extends Component {
    render() {
        return (
            <div className={styles.container}>
                <h2 className={styles.title}>Oferty:</h2>
                {this.props.hotels.map(e => <Hotel key={e.id} hotel={e}/>)}
            </div>
        );
    }
}

export default Hotels;