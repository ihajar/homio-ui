import "./singlePage.scss";
import Slider from "../../components/slider/slider";
import Map from "../../components/map/map";
import { singlePostData, userData } from "../../lib/dummydata";
import { CiLocationOn } from "react-icons/ci";
import { IoBedOutline, IoRestaurantOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { FaSchool } from "react-icons/fa6";
import { TbBus } from "react-icons/tb";
import { LiaRulerCombinedSolid } from "react-icons/lia";

function SinglePage() {
  return (
    <div className="singlePage">
      <div className="detailsContainer">
        <div className="wrapper">
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <CiLocationOn
                    style={{ color: "#3D3D3D", fontSize: "18px" }}
                  />
                  <span>{singlePostData.address}</span>
                </div>
              </div>
              <div className="price">
                <span>$ {singlePostData.price}/m</span>
              </div>
            </div>
            <div className="chat">
              <div className="user">
                <img src={userData.img} alt="user" />
                <span>{userData.name}</span>
              </div>
              <button>Start chat</button>
            </div>

            <div className="bottom">
              <div className="features">
                <div className="room">
                  <div className="feature">
                    <IoBedOutline
                      style={{ color: "#3D3D3D", fontSize: "20px" }}
                    />
                    <span>
                      {singlePostData.bedRooms}{" "}
                      {singlePostData.bedRooms > 1 ? "bedrooms" : "bedroom"}{" "}
                    </span>
                  </div>
                  <div className="feature">
                    <LuBath style={{ color: "#3D3D3D", fontSize: "20px" }} />
                    <span>
                      {singlePostData.bathroom}{" "}
                      {singlePostData.bathroom > 1 ? "bathrooms" : "bathroom"}
                    </span>
                  </div>
                  <div className="feature">
                    <LiaRulerCombinedSolid
                      style={{ color: "#3D3D3D", fontSize: "20px" }}
                    />
                    <span>{singlePostData.size} sqft</span>
                  </div>
                </div>
                <div className="room">
                  <div className="feature">
                    <FaSchool style={{ color: "#3D3D3D", fontSize: "20px" }} />
                    <span>{singlePostData.school}</span>
                  </div>
                  <div className="feature">
                    <TbBus style={{ color: "#3D3D3D", fontSize: "20px" }} />
                    <span>{singlePostData.bus}</span>
                  </div>
                  <div className="feature">
                    <IoRestaurantOutline
                      style={{ color: "#3D3D3D", fontSize: "20px" }}
                    />
                    <span>{singlePostData.restaurant}</span>
                  </div>
                </div>
              </div>
              <div className="details">
                <div className="descripContainer">
                  <p>{singlePostData.description}</p>
                </div>
                <div className="mapContainer">
                  <Map items={[singlePostData]} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="imageContainer">
        <Slider images={singlePostData.images} />
      </div>
    </div>
  );
}

export default SinglePage;
