import { useReducer } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
import { reducer, initialState } from "./reducer";
import HomePage from "./pages/HomePage/HomePage";
import HotelPage from "./pages/HotelPage/HotelPage";
import SearchPage from "./pages/SearchPage/SearchPage";

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
      <Switch>
        <Route path="/hotels/:id" component={HotelPage} />
        <Route path="/search/:term" component={SearchPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </>
  );
  const footer = <Footer />;

  return (
    <Router>
      <AuthContext.Provider
        value={{
          isAuthenticated: state.isAuthenticated,
          signIn: () => dispatch({ type: "signIn"}),
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
