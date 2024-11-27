import { Link, useNavigate } from "react-router-dom";
import backArrow from "../../assets/back_arrow.png";
import "./Friends.scss";


function Friends({ friendsData }) {

  const navigate = useNavigate();

  const handleFriendClick = (friendId) => {
    navigate(`/friends/${friendId}`);
  };



  return (
    <main>
      <div className="friends__header-container">
        <Link to="/">
          <img src={backArrow} alt="back-arrow" className="back-arrow" />
        </Link>

        <h1 className="friends__title">Your Friends List</h1>
      </div>

      <div className="friends__grid-container">
        <div className="friends-grid">
          {friendsData.map((friend) => (
            <div
              key={friend.id}
              className="friend-profile-container"
              onClick={() => handleFriendClick(friend.id)}
            >
              <div className="friend-profile-image-container">
                <img
                  src={friend.profileImage}
                  alt={friend.name}
                  className="friend-profile-image"
                />
                <span className="friend-hover-text">view wishlist</span>
              </div>
              <h3 className="friend-name">{friend.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Friends;
