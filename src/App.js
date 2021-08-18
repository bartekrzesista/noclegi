import { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Hotels from "./components/Hotels/Hotels";

class App extends Component {
  hotels = [
    {
      id: 1,
      name: "Pod akacjami",
      city: 'Warszawa',
      rating: 8.3,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consequat id lorem vitae accumsan.',
      image: ''
    },
    {
      id: 2,
      name: "Dębowy",
      city: 'Lublin',
      rating: 8.8,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: ''
    }
  ];

  constructor(props) {
    super(props);
    this.state = {hotels: this.hotels};
  }

  searchHandler = (term) => {
    const hotels = [...this.hotels]
    .filter(e => e.name
      .toLowerCase()
      .includes(term.toLowerCase())
      )
      this.setState({hotels});
  }

  render() {
    return (
      <div className="App">
        <Header searchHandler={this.searchHandler} />
        <Menu />
        <Hotels hotels={this.state.hotels}/>
      </div>
    );
  }
}

export default App;
