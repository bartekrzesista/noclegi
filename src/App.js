import { useEffect, useReducer} from "react";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Hotels from "./components/Hotels/Hotels";
import LoadingIcon from "./components/UI/LoadingIcon/LoadingIcon";
import Searchbar from "./components/UI/Searchbar/Searchbar";
import Layout from "./components/Layout/Layout";
import Footer from "./components/Footer/Footer";
import ThemeButton from "./components/UI/ThemeButton/ThemeButton";
import ThemeContext from "./context/themeContext";
import AuthContext from "./context/authContext";
import BestHotel from "./components/Hotels/BestHotel/BestHotel";
import InspiringQuote from "./components/InspiringQuote/InspiringQuote";

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
  const reducer = (state, action) => {
    switch (action.type) {
      // const newState = {...state};
      // newState.theme = state.theme === "primary" ? "warning" : "primary";
      // return newState;
      case "set-hotels":
        return {
          ...state,
          hotels: action.hotels,
        };
      case "change-theme":
        return {
          ...state,
          theme: state.theme === "primary" ? "warning" : "primary",
        };
      case "set-loading":
        return {
          ...state,
          loading: action.loading,
        };
      case "signIn":
        return {
          ...state,
          isAuthenticated: true,
        };
      case "signOut":
        return {
          ...state,
          isAuthenticated: false,
        };

      default:
        throw new Error("Nie ma takiej akcji: " + action.type);
    }
  };

  const initialState = {
    hotels: [],
    loading: true,
    theme: "primary",
    isAuthenticated: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "set-hotels", hotels: backendHotels });
      dispatch({ type: "set-loading", loading: false });
    }, 1000);
  }, []);

  const searchHandler = (term) => {
    const searchedHotels = [...backendHotels].filter((e) =>
      e.name.toLowerCase().includes(term.toLowerCase())
    );
    dispatch({ type: "set-hotels", hotels: searchedHotels });
  };

  const toggleTheme = () => {
    dispatch({ type: "change-theme" });
  };

  const getBestHotel = () => {
    if(state.hotels.length < 2) return null;

    const stateHotels= [...state.hotels];
    const compare = (a, b) => {
      return a.rating > b.rating ? -1 : 1;
    }

    return stateHotels.sort(compare)[0];
  };

  const header = (
    <Header>
      <InspiringQuote />
      <Searchbar searchHandler={searchHandler} />
      <ThemeButton />
    </Header>
  );
  const menu = <Menu />;
  const content = state.loading ? (
    <LoadingIcon />
  ) : (
    <>
      {getBestHotel() ? <BestHotel getBestHotel={getBestHotel} /> : null}
      <Hotels hotels={state.hotels} />
    </>
  );
  const footer = <Footer />;

  return (
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
        <Layout header={header} menu={menu} content={content} footer={footer} />
      </ThemeContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
