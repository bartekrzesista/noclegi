import { useState } from "react";
import Input from "../../../../components/Input/Input";
import LoadingButton from "../../../../components/UI/LoadingButton/LoadingButton";

const AddHotel = (props) => {
  // const [form, setForm] = useState({
  //   name: '',
  //   description: '',
  //   city: '',
  //   rooms: 2,
  //   features: [],
  //   image: null,
  //   isActive: true,
  // });
  const [form, setForm] = useState({
    name: {
      value: '',
      error: '',
      showError: false,
      rules: ['required']
    },
    description: {
      value: '',
      error: '',
      showError: false,
      rules: ['required']
    },
    city: {
      value: '',
      error: '',
      showError: false,
      rules: ['required']
    },
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

  const textChangeHandler = (value, fieldName) => {
    setForm({
      ...form,
      [fieldName]: {
        ...form[fieldName],
        value,
        error: 'Pole wymagane',
        showError: true
      }
    });
  };

  return (
    <div className="card">
      <h2 className="card-header">Nowy hotel</h2>
      <div className="card-body">
        <p className="text-muted">Uzupełnij dane hotelu</p>
        <form onSubmit={submit}>
          <Input
            type="text"
            label="Nazwa"
            id="name"
            value={form.name.value}
            onChange={val => textChangeHandler(val, 'name')}
            error={form.name.error}
            showError={form.name.showError} />

          <Input
            type="textarea"
            label="Opis"
            id="description"
            value={form.description.value}
            onChange={val => textChangeHandler(val, 'description')}
            error={form.description.error}
            showError={form.description.showError} />

          <Input
            label="Miejscowość"
            id="city"
            value={form.city.value}
            onChange={val => textChangeHandler(val, 'city')}
            error={form.city.error}
            showError={form.city.showError} />

          <Input
            label="Liczba pokoi"
            id="rooms"
            type="select"
            value={form.rooms}
            onChange={value => setForm({...form, rooms: value})}
            options={[
              {id: 1, value: 1, label: 1},
              {id: 2,  value: 2, label: 2},
              {id: 3,  value: 3, label: 3},
              {id: 4,  value: 4, label: 4},
              ]} />
          
          <h4 className="mt-3">Udogodnienia</h4>
          <Input
            type="checkbox"
            value={form.features}
            onChange={value => setForm({...form, features: value})}
            options={[
              {id: 1, value: 'tv', label: 'TV'},
              {id: 2, value: 'wifi', label: 'Wi-Fi'},
              {id: 3, value: 'parking', label: 'Parking'},
            ]} />

          <h4 className="mt-3">Zdjęcie</h4>
          <Input
            type="file"
            ariaLabel="Hotel image"
            onChange={value => setForm({...form, image: value})} />

          
          <h4 className="mt-3">Status</h4>
          <Input
            type="radio"
            value={form.isActive}
            onChange={value => setForm({...form, isActive: value})}
            options={[
              {id: 1, value: true, label: 'Aktywny'},
              {id: 2, value: false, label: 'Ukryty'},
            ]} />

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
