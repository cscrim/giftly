import { Link } from "react-router-dom";
import "./Card.scss";

const Card = ({ item, baseUrl }) => {
  const {
    item_id,
    item_name,
    description,
    price,
    item_img,
    purchase_link,
  } = item;

  return (
    <div className="card">
      <Link to={`/details/${item_id}`} className="card-link">
        <div className="card-image-container">
          <img
            src={`${baseUrl}${item_img}`} // Ensure full URL is used for the image
            alt={item_name}
            className="card-image"
          />
        </div>
        <div className="card-title">{item_name}</div>
        <div className="card-description">{description}</div>
        <div className="card-price">{price}</div>
      </Link>

      <button
        className="card-button"
        onClick={() => window.open(purchase_link, "_blank")}
      >
        BUY NOW
      </button>
    </div>
  );
};

export default Card;
