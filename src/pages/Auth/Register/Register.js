import { useState, useEffect } from "react";
import LoadingButton from "../../../components/UI/LoadingButton/LoadingButton";
import Input from "../../../components/Input/Input";
import { validate } from "../../../helpers/validations";
import axios from '../../../axios';
import useAuth from "../../../hooks/useAuth";
import { useHistory } from "react-router-dom";

export default function Register(props) {
  const [auth, setAuth] = useAuth();
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: {
      value: "",
      error: "",
      showError: false,
      rules: ["required", "email"],
    },
    password: {
      value: "",
      error: "",
      showError: false,
      rules: ["required", { name: "minLength", length: 10 }],
    },
    confirmPassword: {
      value: "",
      error: "",
      showError: false,
      rules: ["required", { name: "minLength", length: 10 }, "matchPassword"],
    },
  });

  const changeHandler = (value, fieldName) => {
    let error = validate(form[fieldName].rules, value);

    switch(fieldName) {
      case 'password':
        setForm({
          ...form,
          [fieldName]: {
            ...form[fieldName],
            value,
            error,
            showError: true,
          },
          confirmPassword: {
            ...form.confirmPassword,
            value: '',
          },
        });
        break;
      case 'confirmPassword':
        const matchValue = form.password.value;
        error =  validate(form[fieldName].rules, value, matchValue);
        setForm({
          ...form,
          [fieldName]: {
            ...form[fieldName],
            value,
            error,
            showError: true,
          },
        });
        break;
      default: 
        setForm({
          ...form,
          [fieldName]: {
            ...form[fieldName],
            value,
            error,
            showError: true,
          },
        });
    }
  };

  const valid = !Object.values(form)
    .map((input) => input.error)
    .filter((e) => e).length;

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_NOT_SO_SECRET_KEY}`, {
        email: form.email.value,
        password: form.password.value,
        returnSecureToken: true
      });

      setAuth(true, res.data);
      history.push('/');
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    if(auth) history.push('/');
  }, [auth]);

  return (
    <div className="card">
      <h2 className="card-header">Rejestracja</h2>
      <div className="card-body">
        <p className="text-muted">Uzupełnij dane</p>
        <form onSubmit={submit}>
          <Input
            type="email"
            label="Email"
            id="email"
            value={form.email.value}
            onChange={(val) => changeHandler(val, "email")}
            error={form.email.error}
            showError={form.email.showError}
          />

          <Input
            type="password"
            label="Hasło"
            id="password"
            value={form.password.value}
            onChange={(val) => changeHandler(val, "password")}
            error={form.password.error}
            showError={form.password.showError}
          />

          <Input
            type="password"
            label="Powtórz hasło"
            id="confirm-password"
            value={form.confirmPassword.value}
            onChange={(val) => changeHandler(val, "confirmPassword")}
            error={form.confirmPassword.error}
            showError={form.confirmPassword.showError}
          />

          <div className="d-flex justify-content-end mt-3">
            <LoadingButton
              loading={loading}
              className="btn-success"
              disabled={!valid}
            >
              Zarejestruj
            </LoadingButton>
          </div>
        </form>
      </div>
    </div>
  );
}