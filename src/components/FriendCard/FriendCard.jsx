import "./FriendCard.scss";

function FriendCard({
  item_name,
  item_img,
  description,
  price,
  buy_link,
  purchased,
}) {
  return (
    <div className={`friend-card ${purchased ? "purchased" : ""}`}>
      <div className="friend-card-image-container">
        <img src={item_img} alt={item_name} className="friend-card-image" />
      </div>
      <h3 className="friend-card-title">{item_name}</h3>
      <p className="friend-card-description">{description}</p>
      <p className="friend-card-price">{price}</p>
      <a href={buy_link} target="_blank" rel="noopener noreferrer">
        <button className="friend-card-buy-button" disabled={purchased}>
          {purchased ? "GIFTED BY A FRIEND" : "BUY NOW"}
        </button>
      </a>
    </div>
  );
}

export default FriendCard;
