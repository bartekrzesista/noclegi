import React from 'react';
import {Component} from 'react';
import Hotel from './Hotel/Hotel';
import styles from './Hotels.module.css';

class Hotels extends Component {
    render() {
        return (
            <div className={styles.hotels}>
                <h2>hotels</h2>
                <Hotel />
                <Hotel />
            </div>
        );
    }
}

export default Hotels;