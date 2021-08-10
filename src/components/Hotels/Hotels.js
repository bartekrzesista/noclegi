import React from 'react';
import {Component} from 'react';
import Hotel from './Hotel/Hotel';

class Hotels extends Component {
    render() {
        return (
            <div>
                hotels
                <Hotel />
                <Hotel />
            </div>
        );
    }
}

export default Hotels;