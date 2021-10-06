import LoadingButton from "../../../../components/UI/LoadingButton/LoadingButton";

const AddHotel = (props) => {
  return (
    <div className="card">
      <h2 className="card-header">Nowy hotel</h2>
      <div className="card-body">
        <p className="text-muted">Uzupełnij dane hotelu</p>
        <form>
          <div className="form-group">
            <label htmlFor="hotelName" className="form-label">
              Nazwa
            </label>
            <input
              type="text"
              className={`form-control ${false ? "is-invalid" : ""}`}
              id="hotelName"
            />
            <div className="invalid-feedback">Błąd</div>
          </div>

          <div className="form-group mt-3">
            <label htmlFor="hotelCity" className="form-label">
              Miejscowość
            </label>
            <input
              type="text"
              className={`form-control ${false ? "is-invalid" : ""}`}
              id="hotelCity"
            />
            <div className="invalid-feedback">Błąd</div>
          </div>

          <div className="form-group mt-3">
            <label htmlFor="hotelRooms" className="form-label">
              Liczba pokoi
            </label>
            <select className="form-select" name="rooms" id="hotelRooms">
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
              />
              <label className="form-check-label" htmlFor="tv">
                TV
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="wi-fi"
                id="wi-fi"
              />
              <label className="form-check-label" htmlFor="wi-fi">
                Wi-Fi
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="parking"
                id="parking"
              />
              <label className="form-check-label" htmlFor="parking">
                Parking
              </label>
            </div>
          </div>

          <div className="form-group mt-3">
            <h4>Zdjęcie</h4>
            <input type="file" id="hotelImg" aria-label="Hotel picture" />
          </div>

          <div className="form-group mt-3">
            <h4>Status</h4>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="status"
                id="statusActive"
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
              />
              <label className="form-check-label" htmlFor="statusHidden">
                Ukryty
              </label>
            </div>
          </div>

          <div className="d-flex justify-content-end mt-3">
          <LoadingButton
          loading={false}
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
