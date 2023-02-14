import { useParams } from "react-router-dom";
import logo from "../img/Avengerslogo.png";
import avengers from "../img/Avengers.png";
import { useSelector } from "react-redux";
import "../css/SingleCharacter.css";

export function SingleCharacter() {
  const { id } = useParams();
  const characters = useSelector((state) => state.characters);
  const hero = characters.find((item) => item.id === +id);

  return (
    <div className="card-only">
      <div className="banner">
        <img className="avengers" src={avengers} />
        <p className="banner-text">
          New comics every week!<br></br>
          Stay tuned!
        </p>
        <img src={logo} />
      </div>

      <div className="content">
        <img
          className="foto-hero"
          src={`${hero.thumbnail?.path}.${hero.thumbnail?.extension}`}
        />
        <div className="hero-content">
          <h2 className="hero-name">{hero.name}</h2>
          <p className="hero-p">{hero.description}</p>
        </div>
      </div>
    </div>
  );
}
