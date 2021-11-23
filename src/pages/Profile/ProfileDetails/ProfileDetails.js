import { useEffect, useState } from "react";
import LoadingButton from "../../../components/UI/LoadingButton/LoadingButton";
import { validateEmail } from "../../../helpers/validations";
import useAuth from "../../../hooks/useAuth";
import axios from "../../../axios-auth";

export default function ProfileDetails() {
  const [auth, setAuth] = useAuth();
  const [email, setEmail] = useState(auth.email);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
      email: '',
      password: '',
  });
  const [success, setSuccess] = useState(null);

  const buttonDisabled = Object.values(errors).filter(x => x).length;

  useEffect(() => {
      if (validateEmail(email)) {
          setErrors({...errors, email: ''});
      }
      else setErrors({...errors, email: 'Niepoprawny email'});

  }, [email]);

  useEffect(() => {
      if (password.length >= 6 || !password) {
          setErrors({...errors, password: ''});
      }
      else setErrors({...errors, password: 'Wymagane 6 znaków'});
}, [password]);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = {
        idToken: auth.token,
        email,
        returnSecureToken: true
      };
      if (password) data.password = password;

      const res = await axios.post('/accounts:update', data);

      setAuth({
        email: res.data.email,
        token: res.data.idToken,
        userId: res.data.localId
      });
      setSuccess(true);

    } catch (e) {
      console.log(e.response);
    }

    setLoading(false);
  };

  return (
    <form onSubmit={submit}>
      {success
        ? <div className="alert alert-success">Dane zostały zapisane.</div>
        : null
      }
      <div className="form-group">
        <label htmlFor="loginEmail" className="form-label">
          Email
        </label>
        <input
          type="email"
          className={`form-control ${errors.email ? 'is-invalid' : 'is-valid'}`}
          id="loginEmail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="invalid-feedback">{errors.email}</div>
        <div className="valid-feedback">Poprawny email</div>
      </div>

      <div className="form-group">
        <label htmlFor="loginPassword" className="form-label mt-2">
          Hasło
        </label>
        <input
          type="password"
          className={`form-control ${password.length === 0 ? "" : (errors.password ? 'is-invalid' : 'is-valid')}`}
          id="loginPassword"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <div className="invalid-feedback">{errors.password}</div>
        <div className="valid-feedback">Hasło spełnia wymagania</div>
      </div>

      <LoadingButton
        loading={loading}
        className="btn-primary mt-3"
        disabled={buttonDisabled}>
            Zapisz
        </LoadingButton>
    </form>
  );
}
