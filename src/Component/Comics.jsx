import "../css/SingleCharacter.css";
import "../css/Comics.css";
import logo from "../img/Avengerslogo.png";
import avengers from "../img/Avengers.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Comics() {
  const dispatch = useDispatch();
  const comics = useSelector((state) => state.comics);
  const [cartCom, setCartCom] = useState(8);

  console.log(comics[0]);

  const uploadComics = async () => {
    const res = await fetch(
      "https://gateway.marvel.com:443/v1/public/comics?apikey=7c7b8997f6461647a09e0978d453b689&hash=9026bc80debd540c0bdbddc32ec385d7&ts=1&limit=99"
    );
    const json = await res.json();
    console.log(json);
    dispatch({
      type: "upload/comics",
      payload: json.data.results,
    });
  };

  useEffect(() => {
    uploadComics();
  }, []);

  const showMoreComics = () => {
    setCartCom(cartCom + 4);
  };

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

      <div className="comics-block">
        {comics.map(
          (com, index) =>
            index < cartCom && (
              <Link to={`/CartComics/${com.id}`} className="comics-nav">
                <div className="card-comics">
                  <img
                    className="foto-comics"
                    src={`${com.thumbnail?.path}.${com.thumbnail?.extension}`}
                  />
                  <h3 className="title-comics">{com.title}</h3>
                  <p className="price-comics">{com.prices[0].price}$</p>
                </div>
              </Link>
            )
        )}
      </div>

      <button className="load-more" onClick={showMoreComics}>
        LOAD MORE
      </button>
    </div>
  );
}
