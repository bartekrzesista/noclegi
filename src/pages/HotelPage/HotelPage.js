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

    useEffect(() => {
        fetchHotel();
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
                    <b>Opis:</b>{" "}
                    <span className="text-secondary">{hotel.description}</span>
                </p>
                <p>
                    <b>Wyposażenie:</b>
                </p>
                <ul>
                    {hotel.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                    ))}
                </ul>
                <p className="mt-2 fs-4">
                    <b>Ocena:</b> {hotel.rating}
                </p>
            </div>

            {auth ? (
                <div className="card-footer">
                    <h3>Twoja ocena:</h3>
                    <div className="">
                        <div className="mt-3" style={{ width: "50%" }}>
                            <select
                                className="form-select form-select"
                                aria-label="Choose rating">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5" selected>5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                        </div>
                        <div className="my-3">
                            <button type="button" className="btn btn-info">Oceń</button>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
}

export default HotelPage;
