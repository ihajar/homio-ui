
import "./filter.scss";
import { CiLocationOn } from "react-icons/ci";
import { IoBedOutline } from "react-icons/io5";

function Filter() {
  // const [textValue, setTextValue] = useState("");
  // const [numValue, setNumValue] = useState(0);
 
  return (
    <div className="filter">
      <h1>Filter Properties</h1>
      <div className="top">
        <div className="itemTop">
          <CiLocationOn style={{ fontSize: "20px", color: "#666666" }} />
          <input
            type="text"
            name="location"
            id="location"
            placeholder="Enter address"
          />
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="type">Type</label>
          <select name="type" id="type">
            <option value="">Any</option>
            <option value="rent">Rent</option>
            <option value="buy">Buy</option>
            <option value="sell">Sell</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="property">Property</label>
          <select name="property" id="property">
            <option value="">All</option>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="land">Land</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="priceRange">Price Range $</label>
          <input
            className="priceRange"
            type="range"
            name="priceRange"
            id="priceRange"
            min={0}
            max={1000000}
            step={1000}
            placeholder="Price Range"
          />
        </div>
        <div className="item">
          <IoBedOutline  style={{ fontSize: "35px", color: "#040415", paddingBottom: "10px" }} />
          <input
            type="number"
            name="bedroom"
            id="bedroom"
            min={0}
            max={10}
            placeholder="Any"
          />
        </div>
        
      </div>
      <button>
          Search
        </button>
    </div>
  );
}

export default Filter