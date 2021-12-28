import { useReducer, lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { reducer, initialState } from "./reducer";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Searchbar from "./components/UI/Searchbar/Searchbar";
import Layout from "./components/Layout/Layout";
import Footer from "./components/Footer/Footer";
import ThemeButton from "./components/UI/ThemeButton/ThemeButton";
import ThemeContext from "./context/themeContext";
import AuthContext from "./context/authContext";
import ReducerContext from "./context/reducerContext";
import InspiringQuote from "./components/InspiringQuote/InspiringQuote";
import Home from "./pages/Home/Home";
import HotelPage from "./pages/HotelPage/HotelPage";
import Search from "./pages/Search/Search";
import NotFound from "./pages/NotFound/NotFound";
import Login from "./pages/Auth/Login/Login";
import AuthenticatedRoute from "./hoc/AuthenticatedRoute";
import ErrorBoundary from "./hoc/ErrorBoundary";
import AddHotel from "./pages/Profile/MyHotels/AddHotel/AddHotel";
import EditHotel from "./pages/Profile/MyHotels/EditHotel/EditHotel";
import Register from "./pages/Auth/Register/Register";
const  Profile = lazy(() => import("./pages/Profile/Profile"));

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleTheme = () => {
    dispatch({ type: "change-theme" });
  };

  const header = (
    <Header>
      <InspiringQuote />
      <Searchbar />
      <ThemeButton />
    </Header>
  );
  const menu = <Menu />;

  const content = (
    <>
      <ErrorBoundary>
        <Suspense fallback={<p>Ładowanie...</p>}>
          <Switch>
            <AuthenticatedRoute path="/profile/hotels/add-hotel" component={AddHotel} />
            <AuthenticatedRoute path="/profile/hotels/edit/:id" component={EditHotel} />
            <AuthenticatedRoute path="/profile" component={Profile} />
            <Route path="/hotels/:id" component={HotelPage} />
            <Route path="/search/:term?" component={Search} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/" exact component={Home} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </>
  );
  const footer = <Footer />;

  return (
    <Router>
      <AuthContext.Provider
        value={{
          user: state.user,
          signIn: (user) => dispatch({ type: "signIn", user }),
          signOut: () => dispatch({ type: "signOut" }),
        }}
      >
        <ThemeContext.Provider
          value={{
            theme: state.theme,
            toggleTheme,
          }}
        >
          <ReducerContext.Provider value={{
            state: state,
            dispatch: dispatch,
          }}>
            <Layout
              header={header}
              menu={menu}
              content={content}
              footer={footer} />
            </ReducerContext.Provider>
        </ThemeContext.Provider>
      </AuthContext.Provider>
    </Router>
  );
}

export default App;
