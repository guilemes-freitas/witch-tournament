import { Component } from "react";
import "./styles.css";
import Wand from "../../assets/magic-wand.svg";
import Tilt from "react-tilt";

class Card extends Component {
  state = {
    selected: false,
  };

  toggleClass() {
    const { selected } = this.state;
    this.setState({ selected: !selected });
  }
  render() {
    const { selected } = this.state;
    const { student } = this.props;
    const { name, gender, house, patronus, alive, image, wand } = student;
    const { wood, core, length } = wand;
    return (
      <>
        <Tilt className={selected ? "card selected" : "card"}>
          <div className={`img-bg ${house}`}>
            <img className="studentImg" src={image} alt={name}></img>
            <h3 className="studentName">{name}</h3>
          </div>
          <div className="houseContainer">
            <div className="house">
              <img
                className="houseImg"
                src={`../img/${house}.png`}
                alt={house}
              ></img>
              <p>{house}</p>
            </div>
            {wand && (
              <div className="wand" onClick={() => this.toggleClass()}>
                <details>
                  <summary>
                    <img classname="wandIcon" src={Wand} alt="Wand" />
                  </summary>
                  <div className="wandDetails">
                    {wood && <p className="wandDetail">Wood: {wood}</p>}
                    {core && <p className="wandDetail">Core: {core}</p>}
                    {length && <p className="wandDetail">Length: {length}cm</p>}
                  </div>
                </details>
              </div>
            )}
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
        </Tilt>
        {selected && <div className="block"></div>}
      </>
    );
  }
}

export default Card;
