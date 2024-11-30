import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import backArrow from "../../assets/backarrow.png";
import FriendCard from "../../components/FriendCard/FriendCard";
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

        <h1 className="friend-wishlist__title">{friend.name}'s Wishlist</h1>
      </div>

      <section className="friend-wishlist__items-container">
        <div className="friends-card-container">
          {friend.wishlist.map((item) => (
            <FriendCard
              key={item.id}
              item_name={item.itemName}
              item_img={item.itemImage}
              description={item.description}
              price={item.price}
              buy_link={item.buyLink}
              purchased={item.purchased}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default FriendWishlist;
