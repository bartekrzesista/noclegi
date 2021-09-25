import { useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import LoadingIcon from "../../components/UI/LoadingIcon/LoadingIcon";

function HotelPage() {
    const { id } = useParams();
    const [hotel, setHotel] = useState({});
    const [loading, setLoading] = useState(true);

    const fetchHotel = () => {
        setHotel({
            id: 2,
            name: "Dębowy",
            city: "Lublin",
            rating: 8.8,
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: "",
          });
        setLoading(false);
    };

    useEffect(() => {
        // pobieranie danych
        setTimeout(fetchHotel, 500);
    }, []);

    return loading ? <LoadingIcon /> : (
        <h1>Hotel: {hotel.name}</h1>
    );
}

export default HotelPage;