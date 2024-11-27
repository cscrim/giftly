import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import backArrow from "../../assets/back_arrow.png";
import "./FriendWishlist.scss";

function FriendWishlist({ friendsData }) {
  const { id } = useParams();
  const [friend, setFriend] = useState(null);

  useEffect(() => {
    const foundFriend = friendsData.find(
      (friend) => friend.id === parseInt(id)
    );
    setFriend(foundFriend);
  }, [id, friendsData]);

  if (!friend) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <div className="friend-wishlist__header-container">
        <Link to="/friends">
          <img
            src={backArrow}
            alt="Back to Friends List"
            className="back-arrow"
          />
        </Link>
        <img
          src={friend.profileImage}
          alt={friend.name}
          className="friend-profile-image"
        />
        <h1 className="friend-wishlist__title">{friend.name}'s Wishlist</h1>
      </div>

      <section className="friend-wishlist__items-container">
        <div className="friends-card-container">
          {friend.wishlist.map((item) => (
            // <div key={item.id} className="friend-card">

            <div
            key={item.id}
            className={`friend-card ${item.purchased ? "greyed-out" : ""}`}
          >

              <div className="friend-card-image-container">
                <img
                  src={item.itemImage}
                  alt={item.itemName}
                  className="friend-card-image"
                />
              </div>
              <div className="friend-card-title">{item.itemName}</div>
              <div className="friend-card-description">{item.description}</div>
              <div className="friend-card-price">{item.price}</div>
              {/* <a href={item.buyNowLink} target="_blank" rel="noopener noreferrer">
                <button className="friend-card-buy-button">BUY NOW</button>
              </a>
            </div>
          ))}
        </div>
      </section> */}
              {!item.purchased && (
                <a
                  href={item.buyNowLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="friend-card-buy-button">BUY NOW</button>
                </a>
              )}
              {item.purchased && (
                <button className="friend-card-buy-button" disabled>
                  PURCHASED
                </button>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default FriendWishlist;
