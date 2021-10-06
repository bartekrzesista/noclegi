const AddHotel = (props) => {
  return (
    <div className="card">
      <div className="card-header">Nowy Hotel</div>
      <div className="card-body">
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

          <div className="form-group">
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

          <div className="form-group">
            <label htmlFor="hotelRooms" className="form-label">
              Liczba pokoi
            </label>
            <select className="form-control" name="rooms" id="hotelRooms">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>

          <div className="form-group">
            <h3>Udogodnienia</h3>
            <label>
              TV <input type="checkbox" name="tv" />
            </label>
            <label>
              Wi-Fi <input type="checkbox" name="wi-fi" />
            </label>
            <label>
              Parking <input type="checkbox" name="parking" />
            </label>
          </div>

          <div className="form-group">
            <label htmlFor="hotelImg">Zdjęcie</label>
            <input type="file" id="hotelImg" />
          </div>

          <div className="form-group">
            <h3>Aktywny</h3>
            <label>
              Tak <input type="radio" name="active" />
            </label>
            <label>
              Nie <input type="radio" name="active" />
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddHotel;
