import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import backArrow from "../../assets/back_arrow.png";
import "./ItemDetails.scss"; 

function ItemDetails() {
  const { item_id } = useParams(); 
  const [item, setItem] = useState(null);

  const baseUrl = "http://localhost:8080";

  useEffect(() => {
    const fetchItemDetails = async () => {
      try {
        const response = await axios.get(`${baseUrl}/wishlist/details/${item_id}`);
        setItem(response.data); 
      } catch (error) {
        console.error("Error fetching item details:", error);
      }
    };

    fetchItemDetails();
  }, [item_id]);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <div className="add__header-container">
        <Link to="/">
          <img src={backArrow} alt="back-arrow" className="back-arrow" />
        </Link>
        <h1 className="add__title">Item Details</h1>
      </div>

      <div className="details__container">
        <div className="details__image-wrapper">
          <div className="details__image-container">
            {item.item_img ? (
              <img
                src={item.item_img}
                alt={item.item_name}
                className="details__image"
              />
            ) : (
              <img
                src={logo}
                alt="giftly-logo-placeholder"
                className="details__image-placeholder"
              />
            )}
          </div>
        </div>

        <div className="details__info-container">
          <div className="details__info-group">
            <label className="details__label">Item Name</label>
            <p className="details__text">{item.item_name}</p>
          </div>

          <div className="details__info-group">
            <label className="details__label">Price</label>
            <p className="details__text">${item.price}</p>
          </div>

          <div className="details__info-group">
            <label className="details__label">Description</label>
            <p className="details__text">{item.description}</p>
          </div>

          <div className="details__info-group">
            <label className="details__label">Link to Buy</label>
            <a href={item.purchase_link} target="_blank" rel="noopener noreferrer" className="details__link">
              {item.purchase_link}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ItemDetails;