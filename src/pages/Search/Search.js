import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { objectToArrayWithId } from "../../helpers/objects";
import axios from "../../axios";
import Hotels from "../../components/Hotels/Hotels";
import LoadingIcon from '../../components/UI/LoadingIcon/LoadingIcon';

export default function Search() {
    const { term } = useParams();
    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchHotels = async () => {
        try {
            const res = await axios.get('/hotels.json?orderBy="isActive"&equalTo=true');
            let hotelsWithId = [];
            if (term) {
                hotelsWithId = objectToArrayWithId(res.data)
                            .filter(e => e.name.toLowerCase().includes(term.toLowerCase()));
            }
            else {
                hotelsWithId = objectToArrayWithId(res.data);
            }
  
            setHotels(hotelsWithId);
            setLoading(false);
        } catch (e) {
            console.log(e.response);
        }
    };

    useEffect(() => {
        fetchHotels();
    }, [term]);

    return (
        <>
            <h2>Wyniki wyszukiwania dla "{term}":</h2>
            {loading
                ? <LoadingIcon />
                : <Hotels hotels={hotels} />
            }
        </>
    );
}