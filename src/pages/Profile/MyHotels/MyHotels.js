import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";
import axios from "../../../axios";
import { objectToArrayWithId } from "../../../helpers/objects";
import useAuth from "../../../hooks/useAuth";

export default function MyHotels() {
    const [auth] = useAuth();
    const { url } = useRouteMatch();
    const [hotels, setHotels] = useState([]);

    const fetchHotels = async () => {
        try {
            const res = await axios.get(`/hotels.json?orderBy="user_id"&equalTo="${auth.userId}"`);
            const hotelsWithId = objectToArrayWithId(res.data);

            setHotels(hotelsWithId);
        } catch (e) {
            console.log(e.response);
        }
    };

    const deleteHandler = async (id) => {
        try {
            await axios.delete(`/hotels/${id}.json?auth=${auth.token}`);
            const newHotels = hotels.filter(e => e.id !== id);
            setHotels(newHotels);
        } catch (e) {
            console.log(e.response);
        }
    }

    useEffect(() => {
        fetchHotels();
    }, []);
    
    return (
        <div>
            {hotels
                ? (
                    <table className="table" style={{fontSize: 15}}>
                        <thead>
                            <tr>
                                <th>Nazwa</th>
                                <th>Status</th>
                                <th className="text-center">Opcje</th>
                            </tr>
                        </thead>
                        <tbody>
                            {hotels.map((hotel) => (
                                <tr key={hotel.id} className="align-middle">
                                    <td>{hotel.name}</td>
                                    <td>
                                        <span className={`badge ${hotel.isActive ? 'bg-success' : 'bg-secondary'}`}>
                                            {hotel.isActive ? 'aktywny' : 'ukryty'}
                                        </span>
                                    </td>
                                    <td>
                                        <div className="d-flex justify-content-center">
                                            <Link to={`/profile/hotels/edit/${hotel.id}`} className="btn btn-warning btn-sm">Edytuj</Link>
                                            <button onClick={() => deleteHandler(hotel.id)} className="btn btn-danger btn-sm ms-2">Usuń</button>
                                        </div>
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