import "./App.css";
import { Component } from "react";
import CardList from "./components/CardList";

class App extends Component {
  state = {
    init: false,
  };

  render() {
    const { init } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          {init ? (
            <CardList />
          ) : (
            <button onClick={() => this.setState({ init: true })}>Start</button>
          )}
        </header>
      </div>
    );
  }
}

export default App;
