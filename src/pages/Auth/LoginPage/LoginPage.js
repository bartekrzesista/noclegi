import { useState } from "react";
import { useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import LoadingButton from "../../../components/UI/LoadingButton/LoadingButton";

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [auth, setAuth] = useAuth();
    const history = useHistory();

    const submit = (e) => {
        e.preventDefault();
        setLoading(true);    

        setTimeout(() => {
            setAuth(true);
            history.push("/");
        }, 500);
    };

    return (
        <div>
            <h2 className="mb-4">Logowanie</h2>
            <form onSubmit={submit}>
                <label htmlFor="loginEmail" className="form-label">Email:</label>
                <input
                    type="email"
                    className="form-control mb-2"
                    id="loginEmail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <label htmlFor="loginPassword" className="form-label">Hasło:</label>
                <input
                    type="password"
                    className="form-control mb-3"
                    id="loginPassword"
                    value={password}
                    onChange={e => {setPassword(e.target.value)}}
                />

                <LoadingButton loading={loading} label="Zaloguj" />

            </form>
        </div>
    );
}