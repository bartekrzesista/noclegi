export default function ProfileDetails() {
    return (
        <form>
            <label htmlFor="profileEmail" className="form-label">Email:</label>
            <input type="email" className="form-control mb-2" id="profileEmail" defaultValue="obecny.email@domena.com" />

            <label htmlFor="profilePassword" className="form-label">Hasło:</label>
            <input type="password" className="form-control mb-3" id="profilePassword" placeholder="************" />

            <button className="btn btn-primary">Zapisz</button>
        </form>
    );
}