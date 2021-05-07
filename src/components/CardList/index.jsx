import { Component } from "react";
import Card from "../Card";
import "./styles.css";

class CardList extends Component {
  state = {
    students: [],
    loading: true,
  };

  generateRandomNumbers = (options, quantity) => {
    let randomArray = [];
    for (let i = 0; i < quantity; i++) {
      let randomPick = Math.floor(Math.random() * options.length);
      if (randomArray.includes(randomPick)) {
        i--;
      } else {
        randomArray.push(randomPick);
      }
    }
    return randomArray;
  };

  pickRandom = (response) => {
    const houses = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"];
    const randomHouses = this.generateRandomNumbers(houses, 3);
    let pickedHouses = [];
    randomHouses.forEach((house) => {
      pickedHouses.push(
        response.filter((student) => {
          return student.house === houses[house];
        })
      );
    });

    let result = [];
    pickedHouses.forEach((house) => {
      let randomPick = this.generateRandomNumbers(house, 1);
      result.push(house[randomPick[0]]);
    });

    this.setState({
      students: [...result],
    });
  };

  getStudents = () => {
    this.setState({
      loading: true,
    });
    fetch("http://hp-api.herokuapp.com/api/characters/students")
      .then((response) => response.json())
      .then((response) => this.pickRandom(response))
      .then((response) => this.setState({ loading: false }));
  };

  componentDidMount() {
    this.getStudents();
  }

  render() {
    const { students, loading } = this.state;
    return (
      <>
        {!loading ? (
          <>
            <div className="cardList">
              {students.map((student) => (
                <Card student={student} />
              ))}
            </div>
            <button
              className="restartButton"
              onClick={() => this.getStudents()}
            >
              Try Again
            </button>
          </>
        ) : (
          <lottie-player
            className="loading"
            src="https://assets5.lottiefiles.com/packages/lf20_fnm7gv5d.json"
            background="transparent"
            speed="1"
            style={{ width: "300px", height: "300px" }}
            loop
            autoplay
          ></lottie-player>
        )}
      </>
    );
  }
}

export default CardList;
