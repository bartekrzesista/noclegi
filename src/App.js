import { Component } from "react";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Hotels from "./components/Hotels/Hotels";
import LoadingIcon from "./components/UI/LoadingIcon/LoadingIcon";
import Searchbar from "./components/UI/Searchbar/Searchbar";
import Layout from "./components/Layout/Layout";
import Footer from "./components/Footer/Footer";
import ThemeButton from "./components/UI/ThemeButton/ThemeButton";

class App extends Component {
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
    return (
      <Layout
        header={
          <Header>
            <Searchbar
              searchHandler={this.searchHandler}
              theme={this.state.theme}
            />
            <ThemeButton onChange={this.changeTheme} />
          </Header>
        }
        menu={<Menu />}
        content={
          this.state.loading ? (
            <LoadingIcon />
          ) : (
            <Hotels hotels={this.state.hotels} theme={this.state.theme} />
          )
        }
        footer={<Footer />}
      />
    );
  }
}

export default App;
