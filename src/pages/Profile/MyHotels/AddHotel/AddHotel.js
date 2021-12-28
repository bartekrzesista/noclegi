import axios from "../../../../axios";
import useAuth from "../../../../hooks/useAuth";
import { useHistory } from "react-router-dom";
import HotelForm from "../../../../components/HotelForm/HotelForm";

const AddHotel = (props) => {
  const [auth] = useAuth();
  const history = useHistory();

  const submit = async (form) => {
    await axios.post(`/hotels.json?auth=${auth.token}`, form);
    history.push('/profile/hotels');
  };

  return (
    <div className="card">
      <h2 className="card-header">Nowy hotel</h2>
      <div className="card-body">
        <p className="text-muted">Uzupełnij dane hotelu</p>
        <HotelForm buttonText="Dodaj hotel" onSubmit={submit} />
      </div>
    </div>
  );
};

export default AddHotel;