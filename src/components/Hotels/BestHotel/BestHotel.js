import { useState, useEffect, useMemo } from 'react';
import moment from 'moment';

function BestHotel(props) {
    const [time, setTime] = useState('');
    const best = useMemo(() => props.getBestHotel(), [props.getBestHotel]);

    // componentDidMount()
    useEffect(() => {
        const endTime = moment().add(25, 'minutes').add(33, 'seconds');

        const interval = setInterval(() => {
            const remainingTime = -moment().diff(endTime) / 1000;
            const minutes = Math.floor(remainingTime / 60);
            const seconds = Math.floor(remainingTime % 60);

            if(minutes === 0 && seconds === 0) clearInterval(interval);

            setTime(`${minutes} minut i ${seconds} sekund`);
        }, 1000);

        // componentWillUnmount()
        return () => {
            clearInterval(interval);
        }
    }, []);

    if(!best) return null;

    return (
        <div className="card bg-success text-white">
            <div className="card-header">Najlepsza oferta!</div>
            <div className="card-body d-flex justify-content-between">
                <h5>{best.name}</h5>
                <div>Ocena: {best.rating}</div>
                <button type="button" className="btn btn-sm btn-light">Pokaż</button>
            </div>
            <p className="mx-3">Do końca oferty pozostało: <strong>{time}</strong></p>
        </div>
    );
}

export default BestHotel;