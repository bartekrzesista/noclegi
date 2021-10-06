import { Link, useRouteMatch } from "react-router-dom";

export default function MyHotels() {
    const { url } = useRouteMatch();
    
    return (
        <div>
            <p>Nie masz jeszcze żadnego hotelu</p>
            <Link to={`${url}/add-hotel`} className="btn btn-primary">Dodaj hotel</Link>
        </div>
    );
}