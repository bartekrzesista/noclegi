import { Switch, Route, NavLink, useRouteMatch } from 'react-router-dom';
import ProfileDetails from './ProfileDetails/ProfileDetails';
import MyHotels from './MyHotels/MyHotels';

export default function ProfilePage() {
  const {path, url} = useRouteMatch();

  throw new Error('Problem z siecią');

  return (
    <div className="card">
      <div className="card-header">
        <h2>Mój profil</h2>
      </div>
      <div className="card-body">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="true" exact to={`${url}`}>
              Profil
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={`${url}/hotels`}>
              Hotele
            </NavLink>
          </li>
        </ul>
        <div className="pt-4">
            <Switch>
                <Route path={`${path}/hotels`} component={MyHotels} />
                <Route path={`${path}`} component={ProfileDetails} />
                {/* <Route path="/profile" render={() => <p>Wybierz opcję</p>} /> */}
            </Switch>
        </div>
      </div>
    </div>
  );
}
