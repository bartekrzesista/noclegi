import LastHotel from "../../components/Hotels/LastHotel/LastHotel";
import useLocalStorage from '../../hooks/useLocalStorage';
import useWebTitle from "../../hooks/useWebTitle";
import BestHotel from "../../components/Hotels/BestHotel/BestHotel";
import Hotels from "../../components/Hotels/Hotels";
import { useEffect, useState } from "react";
import LoadingIcon from "../../components/UI/LoadingIcon/LoadingIcon";
import axios from "../../axios";
import { objectToArrayWithId } from "../../helpers/objects";

// const backendHotels = [
//     {
//       id: 1,
//       name: "Pod akacjami",
//       city: "Warszawa",
//       rating: 8.3,
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consequat id lorem vitae accumsan.",
//       image: "",
//     },
//     {
//       id: 2,
//       name: "Dębowy",
//       city: "Lublin",
//       rating: 8.8,
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//       image: "",
//     },
//   ];

export default function Home() {
    useWebTitle('Strona główna');
    const [lastHotel, setLastHotel] = useLocalStorage('last-hotel', null);
    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchHotels = async () => {
      try {
          const res = await axios.get('/hotels.json?orderBy="isActive"&equalTo=true');
          const hotelsWithId = objectToArrayWithId(res.data);

          setHotels(hotelsWithId);
          setLoading(false);
      } catch (e) {
          console.log(e.response);
      }
  };

    useEffect(() => {
        fetchHotels();
      }, []);

    const openHotel = (hotel) => setLastHotel(hotel);
    const removeLastHotel = () => setLastHotel(null);
    const getBestHotel = () => {
        if(hotels.length < 2) return null;
    
        const stateHotels= [...hotels];
        const compare = (a, b) => {
          return a.rating > b.rating ? -1 : 1;
        }
    
        return stateHotels.sort(compare)[0];
      };

    return loading ? <LoadingIcon /> : (
        <>
            {lastHotel ? <LastHotel {...lastHotel} removeLastHotel={removeLastHotel} /> : null }
            {getBestHotel() ? <BestHotel getBestHotel={getBestHotel} /> : null}
            <Hotels hotels={hotels} onOpen={openHotel} />
        </>
    );
}