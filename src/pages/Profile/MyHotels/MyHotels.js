import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";
import axios from "../../../axios";
import { objectToArrayWithId } from "../../../helpers/objects";

export default function MyHotels() {
    const { url } = useRouteMatch();
    const [hotels, setHotels] = useState([]);

    const fetchHotels = async () => {
        try {
            const res = await axios.get('/hotels.json');
            const hotelsWithId = objectToArrayWithId(res.data);

            setHotels(hotelsWithId);
        } catch (e) {
            console.log(e.response);
        }
    };

    useEffect(() => {
        fetchHotels();
    }, []);
    
    return (
        <div>
            {hotels
                ? (
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Nazwa</th>
                                <th className="text-center">Opcje</th>
                            </tr>
                        </thead>
                        <tbody>
                            {hotels.map((hotel) => (
                                <tr key={hotel.id}>
                                    <td>{hotel.name}</td>
                                    <td className="d-flex justify-content-center">
                                        <button className="btn btn-warning">Edytuj</button>
                                        <button className="btn btn-danger ms-2">Usuń</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )
                : (
                    <p>Nie masz jeszcze żadnego hotelu</p>
                )
            }
            <Link to={`${url}/add-hotel`} className="btn btn-primary">Dodaj hotel</Link>
        </div>
    );
}