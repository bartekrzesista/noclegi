import { Route, Redirect } from "react-router-dom";
import { useContext } from "react";
import ReducerContext from "../context/reducerContext";

export default function AuthenticatedRoute(props) {
    const context = useContext(ReducerContext);
    console.log(context);

    return (
        context.state.user
        ? <Route {...props} />
        : <Redirect to="/login" />
    );
}