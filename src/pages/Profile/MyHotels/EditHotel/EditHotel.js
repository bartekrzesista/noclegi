import HotelForm from "../../../../components/HotelForm/HotelForm";
import axios from "../../../../axios";
import { useHistory } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

function EditHotel() {
    const history = useHistory();
    const { id } = useParams();
    const [auth] = useAuth();
    const [hotel, setHotel] = useState(null);

    const submit = async (form) => {
        await axios.patch(`/hotels/${id}.json?auth=${auth.token}`, form);
        history.push('/profile/hotels');
      };

    const fetchHotel = async () => {
        const res = await axios.get(`/hotels/${id}.json`);
        const hotelData = res.data;
        delete hotelData.user_id;
        delete hotelData.averageRating;
        setHotel(hotelData);
    }

    useEffect(() => {
        fetchHotel();
    }, []);

    return (
        <div className="card">
            <h2 className="card-header">Edytuj hotel</h2>
            <div className="card-body">
                <p className="text-muted">Uzupełnij dane hotelu</p>
                <HotelForm buttonText="Zapisz" onSubmit={submit} hotel={hotel} />
            </div>
        </div>
    );
}

export default EditHotel;