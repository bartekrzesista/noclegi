import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import LoadingButton from "../../../components/UI/LoadingButton/LoadingButton";
import axios from "../../../axios-auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [auth, setAuth] = useAuth();
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post('/accounts:signInWithPassword', {
        email,
        password,
        returnSecureToken: true
      });
      
      setAuth(true, {
        email: res.data.email,
        token: res.data.idToken,
        userId: res.data.localId
      });
      history.push('/');

    } catch (e) {
      setError(e.response.data.error.message);
      setLoading(false);
    }
  };

  const getErrorMessage = (error) => {
    switch(error) {
      case 'EMAIL_NOT_FOUND': 
        return 'Nieprawidłowy adres email.';

      case 'INVALID_PASSWORD':
        return 'Nieprawidłowe hasło.';

      default: return 'Za dużo prób logowania. Spróbuj później.';
    }
  }

  useEffect(() => {
    if(auth) history.push('/');
  }, [auth]);

  return (
    <div>
      <h2 className="mb-4">Logowanie</h2>

      {error
        ? <div className="alert alert-danger">{getErrorMessage(error)}</div>
        : null
      }

      <form onSubmit={submit}>
        <label htmlFor="loginEmail" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control mb-2"
          id="loginEmail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="loginPassword" className="form-label">
          Hasło
        </label>
        <input
          type="password"
          className="form-control mb-3"
          id="loginPassword"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <LoadingButton loading={loading}>Zaloguj</LoadingButton>
      </form>
    </div>
  );
}
