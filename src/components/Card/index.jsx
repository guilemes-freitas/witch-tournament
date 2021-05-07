import { Component } from "react";
import "./styles.css";

class Card extends Component {
  render() {
    const { student } = this.props;
    const { name, gender, house, patronus, alive, image } = student;
    return (
      <div className="card">
        <div className={house}>
          <img className="studentImg" src={image} alt={name}></img>
          <h3 className="studentName">{name}</h3>
        </div>
        <div className="houseContainer">
          <img
            className="houseImg"
            src={`../img/${house}.png`}
            alt={house}
          ></img>
          <p>{house}</p>
        </div>
        <div className={`card-stats ${house}`}>
          <div className="stat">
            <span>{alive ? "Alive" : "Deceased"}</span>
          </div>
          <div className="stat">
            <span className="studentGender">{gender}</span>
          </div>
          {patronus && (
            <div className="stat">
              <span>Patronus: {patronus}</span>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Card;
