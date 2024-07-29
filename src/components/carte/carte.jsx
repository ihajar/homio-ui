import "./carte.scss"
import { Link } from "react-router-dom"
import { CiLocationOn } from "react-icons/ci";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { AiOutlineMessage, AiFillMessage } from "react-icons/ai";
import { useState } from "react";


function Carte({ item }) {

    const [isHovered, setIsHoevered] = useState(false);

  return (
    <div className="carte">
      <Link to={`/${item.id}`} className="imageContainer">
        <img src={item.img} alt="" />
      </Link>
      <div className="textContainer">
        <div className="detailsContainer">
          <div className="top">
            <div className="title">
                <p><span>${item.price}</span> / month</p>
              <button
                onMouseEnter={() => setIsHoevered(true)}
                onMouseLeave={() => setIsHoevered(false)}
              >
                {isHovered ? (
                    <AiFillMessage style={{ color: "#0B6E98", fontSize: "25px" }} />
                ) : (
                    <AiOutlineMessage style={{ color: "#040415", fontSize: "25px" }} />
                )}
                
              </button>
            </div>
            <p className="address">
              <CiLocationOn style={{ color: "#525252", fontSize: "15px" }} />
              <span>{item.address}</span>
            </p>
          </div>
          <div className="bottom">
            <div className="fetaure">
              <IoBedOutline style={{ color: "#525252", fontSize: "18px" }} />
              <p>{item.bedroom}</p>
            </div>
            <div className="fetaure">
              <LuBath style={{ color: "#525252", fontSize: "18px" }} />
              <p>{item.bathroom}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carte