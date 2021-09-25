import { useParams } from "react-router";

export default function SearchPage() {
    const { term } = useParams();

    // const searchHandler = (term) => {
    //     const searchedHotels = [...backendHotels].filter((e) =>
    //       e.name.toLowerCase().includes(term.toLowerCase())
    //     );
    //     dispatch({ type: "set-hotels", hotels: searchedHotels });
    //   };

    return (
        <h2>Wyniki wyszukiwania dla "{term}":</h2>
    );
}