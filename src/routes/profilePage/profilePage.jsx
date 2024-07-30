import "./profilePage.scss";
import { LiaUserEditSolid } from "react-icons/lia";
import { IoCreateOutline } from "react-icons/io5";
import List from "../../components/list/list";
import Chat from "../../components/chat/chat";
 
  
function ProfilePage() {
  return (
    <div className='profilePage'>
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button>
              <LiaUserEditSolid style={{ fontSize: "18px", color: "#040415"}} />
              <span>Profile</span>
            </button>
          </div>
          <div className="info">
            <div className="box">
              <span>Profile picture</span>
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="" 
              />
            </div>
            <div className="box">
              <span>Username</span>
              <span><strong>John Doe</strong></span>
            </div>
            <div className="box">
              <span>Email</span>
              <span><strong>john@gmail.com</strong></span>
            </div>
            
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>
              <IoCreateOutline style={{ fontSize: "18px", color: "#040415"}} />
              <span>Create new post</span>
            </button>
          </div>
          <List />
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List />
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  )
}

export default ProfilePage