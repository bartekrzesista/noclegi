import { useEffect, useState } from "react";
import LoadingIcon from "../../components/UI/LoadingIcon/LoadingIcon";
import useWebTitle from "../../hooks/useWebTitle";
import axios from "../../axios";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";

function HotelPage() {
    const { id } = useParams();
    const [hotel, setHotel] = useState({});
    const [loading, setLoading] = useState(true);
    const [personalRating, setPersonalRating] = useState();
    const [success, setSuccess] = useState(null);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const setTitle = useWebTitle();
    const [auth] = useAuth();

    const fetchHotel = async () => {
        try {
            const res = await axios.get(`/hotels/${id}.json`);
            setHotel(res.data);
            setTitle(`Hotel - ${res.data.name}`);
            setLoading(false);
        } catch (e) {
            console.log(e.response);
        }
    };

    const fetchPersonalRating = async () => {
        try {
            const res = await axios.get(`/ratings/${id}/${auth.userId}.json`);
            setPersonalRating(res.data.rating);
            setBtnDisabled(false);
        } catch (e) {
            setPersonalRating('no rating');
        }
    };

    const calcAverageRating = async () => {
        try {
            const res = await axios.get(`/ratings/${id}.json`);
            const ratings = res.data;

            let sum = 0;
            let length = 0;
            for (const userId in ratings) {
                const { rating } = ratings[userId];
                sum += parseInt(rating);
                length++;
            }
            const average = sum / length;
            await axios.patch(`/hotels/${id}.json?auth=${auth.token}`, {...hotel, averageRating: average});
        } catch (e) {
            console.log(e);
        }
    };

    const rateHotel = async () => {
        try {
            if (personalRating && personalRating !== 'no rating') {
                const res = await axios.put(`/ratings/${id}/${auth.userId}.json?auth=${auth.token}`, {rating: personalRating});

                if (res.status === 200) {
                    setSuccess(true);
                    setTimeout(() => {
                        setSuccess(false);
                    }, 5000);
                }
                calcAverageRating();
            }
            else {
                console.log('bad rating value', personalRating);
            }
        } catch (e) {
            console.log(e.response);
        }
    };

    const onChangeHandler = e => {
        if (e.target.value === 'no rating') setBtnDisabled(true);
        else setBtnDisabled(false);
        setPersonalRating(e.target.value);
    };

    useEffect(() => {
        fetchHotel();
        fetchPersonalRating();
    }, []);

    return loading ? (
        <LoadingIcon />
    ) : (
        <div className="card">
            <div className="card-header">
                <h1>Hotel: {hotel.name}</h1>
            </div>
            <div className="card-body d-flex flex-column">
                <img
                    src="https://placeimg.com/420/220/arch"
                    alt="Hotel building"
                    className="img-fluid mb-4"
                />
                <p>
                    <b>Miejscowość:</b> {hotel.city}
                </p>
                <p>
                    <b>Liczba pokoi:</b> {hotel.rooms}
                </p>
                <p>
                    <b>Opis:</b>
                    <span className="text-secondary"> {hotel.description}</span>
                </p>
                <p>
                    <b>Wyposażenie:</b>
                </p>
                <ul>
                    {hotel.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                    ))}
                </ul>
                <p className="mt-2 fs-5">
                    <b>Średnia ocena:</b> {hotel.averageRating ? hotel.averageRating : 'Brak ocen'}
                </p>
            </div>

            {auth ? (
                <div className="card-footer pt-4 pb-4 d-flex flex-column">
                    <h3>Twoja ocena:</h3>
                    <div className="w-50 mt-2 mb-3">
                        <select
                            value={personalRating}
                            onChange={onChangeHandler}
                            className="form-select form-select"
                            aria-label="Choose rating">
                            <option value="no rating">Brak oceny</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    {success
                        ? <div className="alert alert-success">Ocena została zapisana.</div>
                        : null
                    }
                    <div className="mt-5 d-flex justify-content-end">
                        <button type="button" className="btn btn-info" onClick={rateHotel} disabled={btnDisabled}>Oceń</button>
                    </div>
                </div>
            ) : null}
        </div>
    );
}

export default HotelPage;