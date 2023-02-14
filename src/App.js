import "./App.css";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import { Comics } from "./Component/Comics";
import { Characters } from "./Component/Characters";
import { SingleCharacter } from "./Component/SingleCharacter";
import { CartComics } from "./Component/CartComics"

function App() {
  return (
    <div className="app">
      <div className="header">
        <Link to="/Characters" className="marvel">
          <span>Marvel</span> information portal
        </Link>
        <div>
          <NavLink to="/Characters" className="characters">
            Characters
          </NavLink>
          /
          <NavLink to="/Comics" className="comics">
            Comics
          </NavLink>
        </div>
      </div>
      <Routes>
        <Route path="/Characters" element={<Characters />} />
        <Route path="/Comics" element={<Comics />} />
        <Route path="/SingleCharacter/:id" element={<SingleCharacter />} />
        <Route path="/CartComics/:id" element={<CartComics />} />
      </Routes>
    </div>
  );
}

export default App;
