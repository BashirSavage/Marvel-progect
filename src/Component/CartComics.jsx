import "../css/SingleCharacter.css";
import logo from "../img/Avengerslogo.png";
import avengers from "../img/Avengers.png";
import { NavLink, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "../css/CartComics.css";

export function CartComics() {
  const { id } = useParams();
  const comics = useSelector((state) => state.comics);
  const magazin = comics.find((item) => item.id === +id);

  return (
    <div className="comics">
      <div className="card-only">
        <div className="banner">
          <img className="avengers" src={avengers} />
          <p className="banner-text">
            New comics every week!<br></br>
            Stay tuned!
          </p>
          <img src={logo} />
        </div>
      </div>

      <div className="magazin">
        <div className="content-magazin">
          <img
            className="foto"
            src={`${magazin.thumbnail?.path}.${magazin.thumbnail?.extension}`}
          />
          <div>
            <h2 className="title">{magazin.title}</h2>
            <p className="paragraph">{magazin.description}</p>
            <p className="page">{magazin.pageCount} pages</p>
            <p className="lang">Language:{magazin.textObjects[0]?.language}</p>
            <h2 className="price">{magazin.prices[0].price}$</h2>
          </div>
        </div>
        <NavLink to="/Comics" className="back">
          <div>Back to all</div>
        </NavLink>
      </div>
    </div>
  );
}
