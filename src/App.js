import { useEffect, useState } from "react";
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
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState('primary');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHotels(backendHotels);
      setLoading(false);
    }, 1000);
  }, []);

  const searchHandler = (term) => {
    const hotels = [...backendHotels].filter((e) =>
      e.name.toLowerCase().includes(term.toLowerCase())
    );
    setHotels(hotels);
  };

  const toggleTheme = () => {
    const newTheme = theme === "primary" ? "warning" : "primary";
    setTheme(newTheme);
  };


  const header = (
    <Header>
      <Searchbar searchHandler={searchHandler} />
      <ThemeButton />
    </Header>
  );
  const menu = <Menu />;
  const content = loading ? (
    <LoadingIcon />
  ) : (
    <Hotels hotels={hotels} />
  );
  const footer = <Footer />;

  return (
    <AuthContext.Provider value={{
      isAuthenticated,
      signIn: () => setIsAuthenticated(true),
      signOut: () => setIsAuthenticated(false)
    }}>
      <ThemeContext.Provider
        value={{
          theme,
          toggleTheme
        }}
      >
        <Layout
          header={header}
          menu={menu}
          content={content}
          footer={footer}
        />
      </ThemeContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
