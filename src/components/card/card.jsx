import { Link } from "react-router-dom"
import "./card.scss"
import { CiLocationOn } from "react-icons/ci";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { AiOutlineMessage, AiFillMessage } from "react-icons/ai";
import { useState } from "react";
 

 
function Card({ item }) {

  const [isHeartHovered, setIsHeartHovered] = useState(false)
  const [isMessageHovered, setMessageHovered] = useState(false)

  return (
    <div className="card">
      <Link to={`/${item.id}`} className="imageContainer">
        <img src={item.img} alt="" />
      </Link>
      <div className="textContainer">
        <div className="detailsContainer">
          <div className="left">
            <h2 className="title">
              <Link to={`/${item.id}`}>{item.title}</Link>
            </h2>
            <p className="address">
              <CiLocationOn style={{ color: "#040415", fontSize: "18px" }} />
              <span>{item.address}</span>
            </p>
          </div>
          <div className="right">
            <p className="price">
              <span>${item.price}</span> /m
            </p>
            <div className="features">
              <div className="feature">
                <IoBedOutline style={{ color: "#040415", fontSize: "18px" }} />
                <p>{item.bedroom}</p>
              </div>
              <hr className="divider" />
              <div className="feature">
                <LuBath style={{ color: "#040415", fontSize: "18px" }} />
                <p>{item.bathroom}</p>
              </div>
              
            </div>
          </div>
        </div>
        
        <div className="btnContainers">
          <button
            onMouseEnter={() => setIsHeartHovered(true)}
            onMouseLeave={() => setIsHeartHovered(false)}
          >
            {isHeartHovered ? (
              <GoHeartFill style={{ color: "#EC9A29", fontSize: "25px" }} />
              ): (
                <GoHeart style={{ color: "#040415", fontSize: "25px" }} />
              )}
          </button>
          <button
            onMouseEnter={() => setMessageHovered(true)}
            onMouseLeave={() => setMessageHovered(false)}
          >
             {isMessageHovered? (
              <AiFillMessage style={{ color: "#EC9A29", fontSize: "25px" }} />
              ): (
                <AiOutlineMessage style={{ color: "#040415", fontSize: "25px" }} />
              )}
            
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card