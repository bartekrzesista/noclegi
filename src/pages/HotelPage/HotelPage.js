import { useEffect, useState } from "react";
import LoadingIcon from "../../components/UI/LoadingIcon/LoadingIcon";
import useWebTitle from "../../hooks/useWebTitle";
import axios from "../../axios";
import { useParams } from 'react-router';

function HotelPage() {
    const { id } = useParams();
    const [hotel, setHotel] = useState({});
    const [loading, setLoading] = useState(true);
    const setTitle = useWebTitle();

    const fetchHotel = async () => {
        try {
            const res = await axios.get(`/hotels/${id}.json`);
            setHotel(res.data);
            console.log(res.data)
            setTitle(`Hotel - ${res.data.name}`);  
            setLoading(false);
        } catch (e) {
            console.log(e.response);
        }
        
    };

    useEffect(() => {
        fetchHotel();
    }, []);

    return loading ? <LoadingIcon /> : (
        <>
            <h1>Hotel: {hotel.name}</h1>
            <p>Liczba pokoi: {hotel.rooms}</p>
            <p>Ocena: {hotel.rating}</p>
        </>

    );
}

export default HotelPage;