import { useRef } from "react";
import { useState } from "react/cjs/react.development";
import LoadingButton from "../../../../components/UI/LoadingButton/LoadingButton";

const AddHotel = (props) => {
  const imageRef = useRef();
  const [form, setForm] = useState({
    name: '',
    description: '',
    city: '',
    rooms: 2,
    features: [],
    image: null,
    isActive: true,
  });
  const [loading, setLoading] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  const changeFeatureHandler = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    const newFeatures = isChecked
      ? [...form.features, value]
      : form.features.filter(e => e !== value);

    setForm({...form, features: newFeatures});
  };

  return (
    <div className="card">
      <h2 className="card-header">Nowy hotel</h2>
      <div className="card-body">
        <p className="text-muted">Uzupełnij dane hotelu</p>
        <form onSubmit={submit}>
          <div className="form-group">
            <label htmlFor="hotelName" className="form-label">
              Nazwa
            </label>
            <input
              type="text"
              className={`form-control ${false ? "is-invalid" : ""}`}
              id="hotelName"
              value={form.name}
              onChange={e => setForm({...form, name: e.target.value})}
            />
            <div className="invalid-feedback">Błąd</div>
          </div>

          <div className="form-group mt-3">
            <label htmlFor="hotelDescription" className="form-label">
              Opis
            </label>
            <textarea
              type="text"
              className="form-control"
              id="hotelDescription"
              value={form.description}
              onChange={e => setForm({...form, description: e.target.value})}
            />
          </div>

          <div className="form-group mt-3">
            <label htmlFor="hotelCity" className="form-label">
              Miejscowość
            </label>
            <input
              type="text"
              className={`form-control ${false ? "is-invalid" : ""}`}
              id="hotelCity"
              value={form.city}
              onChange={e => setForm({...form, city: e.target.value})}
            />
            <div className="invalid-feedback">Błąd</div>
          </div>

          <div className="form-group mt-3">
            <label htmlFor="hotelRooms" className="form-label">
              Liczba pokoi
            </label>
            <select className="form-select" name="rooms" id="hotelRooms" value={form.rooms} onChange={e => setForm({...form, rooms: e.target.value})}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>

          <div className="form-group mt-3">
            <h4>Udogodnienia</h4>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="tv"
                id="tv"
                value="tv"
                checked={form.features.includes('tv')}
                onChange={changeFeatureHandler}
              />
              <label className="form-check-label" htmlFor="tv">
                TV
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="wifi"
                id="wifi"
                value="wifi"
                checked={form.features.includes('wifi')}
                onChange={changeFeatureHandler}
              />
              <label className="form-check-label" htmlFor="wifi">
                Wi-Fi
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="parking"
                id="parking"
                value="parking"
                checked={form.features.includes('parking')}
                onChange={changeFeatureHandler}
              />
              <label className="form-check-label" htmlFor="parking">
                Parking
              </label>
            </div>
          </div>

          <div className="form-group mt-3">
            <h4>Zdjęcie</h4>
            <input type="file" id="hotelImage" aria-label="Hotel image" ref={imageRef} onChange={e => setForm({...form, image: e.target.files})} />
          </div>

          <div className="form-group mt-3">
            <h4>Status</h4>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="status"
                id="statusActive"
                value="active"
                checked={form.isActive}
                onChange={e => setForm({...form, isActive: true})}
              />
              <label className="form-check-label" htmlFor="statusActive">
                Aktywny
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="status"
                id="statusHidden"
                value="hidden"
                checked={!form.isActive}
                onChange={e => setForm({...form, isActive: false})}
              />
              <label className="form-check-label" htmlFor="statusHidden">
                Ukryty
              </label>
            </div>
          </div>

          <div className="d-flex justify-content-end mt-3">
          <LoadingButton
          loading={loading}
          className="btn-success">
              Dodaj hotel
            </LoadingButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddHotel;
