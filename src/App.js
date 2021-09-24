import { useEffect, useReducer} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import LoadingIcon from "./components/UI/LoadingIcon/LoadingIcon";
import Searchbar from "./components/UI/Searchbar/Searchbar";
import Layout from "./components/Layout/Layout";
import Footer from "./components/Footer/Footer";
import ThemeButton from "./components/UI/ThemeButton/ThemeButton";
import ThemeContext from "./context/themeContext";
import AuthContext from "./context/authContext";
import ReducerContext from "./context/reducerContext";
import InspiringQuote from "./components/InspiringQuote/InspiringQuote";
import { reducer, initialState } from "./reducer";
import Home from "./pages/Home/Home";

const backendHotels = [
  {
    id: 1,
    name: "Pod akacjami",
    city: "Warszawa",
    rating: 8.3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consequat id lorem vitae accumsan.",
    image: "",
  },
  {
    id: 2,
    name: "Dębowy",
    city: "Lublin",
    rating: 8.8,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "",
  },
];

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const searchHandler = (term) => {
    const searchedHotels = [...backendHotels].filter((e) =>
      e.name.toLowerCase().includes(term.toLowerCase())
    );
    dispatch({ type: "set-hotels", hotels: searchedHotels });
  };

  const toggleTheme = () => {
    dispatch({ type: "change-theme" });
  };

  const header = (
    <Header>
      <InspiringQuote />
      <Searchbar searchHandler={searchHandler} />
      <ThemeButton />
    </Header>
  );
  const menu = <Menu />;

  const content = (
    <>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/hotels/:id"><h1>To jest jakiś hotel</h1></Route>
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
