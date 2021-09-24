import LastHotel from "../../components/Hotels/LastHotel/LastHotel";
import useLocalStorage from '../../hooks/useLocalStorage';
import useWebTitle from "../../hooks/useWebTitle";
import BestHotel from "../../components/Hotels/BestHotel/BestHotel";
import Hotels from "../../components/Hotels/Hotels";
import { useContext, useEffect } from "react";
import ReducerContext from "../../context/reducerContext";
import LoadingIcon from "../../components/UI/LoadingIcon/LoadingIcon";

const backendHotels = [
    {
      id: 1,
      name: "Pod akacjami",
      city: "Warszawa",
      rating: 8.3,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consequat id lorem vitae accumsan.",
      image: "",
    },
    {
      id: 2,
      name: "Dębowy",
      city: "Lublin",
      rating: 8.8,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "",
    },
  ];

export default function HomePage() {
    useWebTitle('Strona główna');
    const [lastHotel, setLastHotel] = useLocalStorage('last-hotel', null);
    const reducer = useContext(ReducerContext);

    useEffect(() => {
      // reducer.dispatch({ type: "set-loading", loading: true });

        setTimeout(() => {
          reducer.dispatch({ type: "set-hotels", hotels: backendHotels });
          reducer.dispatch({ type: "set-loading", loading: false });
        }, 1000);
      }, []);

    const openHotel = (hotel) => setLastHotel(hotel);
    const removeLastHotel = () => setLastHotel(null);
    const getBestHotel = () => {
        if(reducer.state.hotels.length < 2) return null;
    
        const stateHotels= [...reducer.state.hotels];
        const compare = (a, b) => {
          return a.rating > b.rating ? -1 : 1;
        }
    
        return stateHotels.sort(compare)[0];
      };

    if (reducer.state.loading) return null;

    return (
        <>
            {lastHotel ? <LastHotel {...lastHotel} removeLastHotel={removeLastHotel} /> : null }
            {getBestHotel() ? <BestHotel getBestHotel={getBestHotel} /> : null}
            <Hotels hotels={reducer.state.hotels} onOpen={openHotel} />
        </>
    );
}