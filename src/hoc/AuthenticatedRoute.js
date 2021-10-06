import { Route, Redirect } from "react-router-dom";
import { useContext } from "react";
import ReducerContext from "../context/reducerContext";

export default function AuthenticatedRoute(props) {
    const context = useContext(ReducerContext);

    return (
        context.state.isAuthenticated
        ? <Route {...props} />
        : <Redirect to="/login" />
    );
}