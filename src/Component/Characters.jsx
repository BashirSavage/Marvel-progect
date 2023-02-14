import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../css/Character.css";
import { Link } from "react-router-dom";

export function Characters() {
  const dispatch = useDispatch();
  const randomCharacter = useSelector((state) => state.randomCharacter);
  const characters = useSelector((state) => state.characters);
  const [visable, setVisable] = useState(9);
  const selectCharacter = useSelector((state) => state.selectCharacter);

  const showMoreItems = () => {
    setVisable(visable + 3);
  };

  const uploadCharacters = async () => {
    const res = await fetch(
      "https://gateway.marvel.com:443/v1/public/characters?apikey=7c7b8997f6461647a09e0978d453b689&hash=9026bc80debd540c0bdbddc32ec385d7&ts=1&limit=99"
    );
    const json = await res.json();
    console.log(json);
    dispatch({
      type: "upload/characters",
      payload: json.data.results,
    });
  };

  const tryIt = () => {
    dispatch({
      type: "random/character",
    });
  };

  useEffect(() => {
    uploadCharacters();
  }, []);

  const selectShow = (hero) => {
    dispatch({
      type: "select/character",
      payload: hero,
    });
  };

  return (
    <>
      <div className="herous">
        <div className="random-herous">
          <div className="left-side">
            <div className="block-in-block">
              <div className="random">
                <img
                  className="foto-herous"
                  src={`${randomCharacter.thumbnail?.path}.${randomCharacter.thumbnail?.extension}`}
                />
              </div>
              <div className="about-herous">
                <h2 className="hero-name">{randomCharacter.name}</h2>
                <p className="herous-p">{randomCharacter.description}</p>
                <Link to={`/SingleCharacter/${randomCharacter.id}`}>
                  <button className="homepage">HOMEPAGE</button>
                </Link>
                <button className="wiki">WiKi</button>
              </div>
            </div>
          </div>
          <div className="right-side">
            <div className="right-block">
              <p className="p1">
                Random character for today!<br></br>
                Do you want to get to know him better?
              </p>
              <p className="p2">Or choose another one</p>
              <button className="tryit" onClick={tryIt}>
                TRY IT
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="main-block">
        <div className="card-block">
          {characters.map(
            (item, index) =>
              index < visable && (
                <div className="herous-card" onClick={() => selectShow(item)}>
                  <img
                    className="cards-herous"
                    src={`${item.thumbnail?.path}.${item.thumbnail?.extension}`}
                  />

                  <p className="name-herou">{item.name}</p>
                </div>
              )
          )}
        </div>
        <div>
          <div className="character-block">
            {selectCharacter.id ? (
              <div className="block-hero">
                <div className="hero-two-block">
                  <img
                    className="foto-herous"
                    src={`${selectCharacter.thumbnail?.path}.${selectCharacter.thumbnail?.extension}`}
                  />
                  <div className="grid-block">
                    <h2 className="hero">{selectCharacter.name}</h2>
                    <Link to={`/SingleCharacter/${selectCharacter.id}`}>
                      <button className="homepage">HOMEPAGE</button>
                    </Link>
                    <button href="#" className="wiki-character-block">
                      WiKi
                    </button>
                  </div>
                </div>
                <div>
                  <p className="herous-p">{selectCharacter.description}</p>
                </div>
              </div>
            ) : (
              <div className="empty-block">
                <h3>Please select a character to see information</h3>
                <div className="two-block">
                  <div className="circle"></div>
                  <div className="with-circle"></div>
                </div>
                <div className="empty-b1"></div>
                <div className="empty-b2"></div>
                <div className="empty-b3"></div>
              </div>
            )}
          </div>
        </div>
      </div>
      <button className="load" onClick={showMoreItems}>
        LOAD MORE
      </button>
    </>
  );
}
