export default function LoginPage() {
    return (
        <div>
            <h2 className="mb-4">Logowanie</h2>
            <form>
                <label htmlFor="loginEmail" className="form-label">Email:</label>
                <input type="email" className="form-control mb-2" id="loginEmail" />

                <label htmlFor="loginPassword" className="form-label">Hasło:</label>
                <input type="password" className="form-control mb-3"    id="loginPassword" />

                <button className="btn btn-primary">Zaloguj</button>
            </form>
        </div>
    );
}