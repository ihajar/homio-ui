import { FaSearch } from "react-icons/fa"; 
import { useState } from "react";
import "./searchBar.scss";

const types = ["rent", "buy", "sell"];

function SearchBar() {
  const [query, setQuery] = useState({
    type: "rent",
    localtion: "",
    priceRange: 0,
  });
  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };
  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>

      <form>
        <input type="text" name="location" placeholder="Search Your City" />
        <input type="text" name="property" placeholder="Property Type" />
        <input type="number" name="priceRange" min={0} max={1000000} placeholder="Price Range" />
        <button>
          <FaSearch style={{ color: 'white',  fontSize: '25px'}} /> 
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
