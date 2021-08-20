import { Component } from "react";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Hotels from "./components/Hotels/Hotels";
import LoadingIcon from "./components/UI/LoadingIcon/LoadingIcon";
import Searchbar from "./components/UI/Searchbar/Searchbar";
import Layout from "./components/Layout/Layout";
import Footer from "./components/Footer/Footer";
import ThemeButton from "./components/UI/ThemeButton/ThemeButton";
import ThemeContext from "./context/themeContext";

class App extends Component {
  static contextType = ThemeContext;

  hotels = [
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

  constructor(props) {
    super(props);
    this.state = {
      hotels: [],
      loading: true,
      theme: "primary",
    };
  }

  searchHandler = (term) => {
    const hotels = [...this.hotels].filter((e) =>
      e.name.toLowerCase().includes(term.toLowerCase())
    );
    this.setState({ hotels });
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        hotels: this.hotels,
        loading: false,
      });
    }, 1000);
  }

  changeTheme = () => {
    const newTheme = this.state.theme === "primary" ? "warning" : "primary";
    this.setState({ theme: newTheme });
  };

  render() {
    const header = (
      <Header>
        <Searchbar searchHandler={this.searchHandler} />
        <ThemeButton />
      </Header>
    );

    const menu = <Menu />;

    const content = this.state.loading ? (
      <LoadingIcon />
    ) : (
      <Hotels hotels={this.state.hotels} />
    );

    const footer = <Footer />;

    return (
      <ThemeContext.Provider value={{
        theme: this.state.theme,
        toggleTheme: this.changeTheme
      }
      }>
        <Layout
          header={header}
          menu={menu}
          content={content}
          footer={footer}
        />
      </ThemeContext.Provider>
    );
  }
}

export default App;
