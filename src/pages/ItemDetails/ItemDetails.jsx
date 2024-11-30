import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import backArrow from "../../assets/backarrow.png";
import ItemDeleteModal from "../../components/ItemDeleteModal/ItemDeleteModal";
import "./ItemDetails.scss";

function ItemDetails() {
  const { item_id } = useParams();
  const [item, setItem] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const navigate = useNavigate();

  const baseUrl = "http://localhost:8080";

  useEffect(() => {
    const fetchItemDetails = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/wishlist/details/${item_id}`
        );
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

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${baseUrl}/wishlist/details/${id}`);
      navigate = "/";
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <main>
      <div className="details__header-container">
        <Link to="/">
          <img src={backArrow} alt="back-arrow" className="back-arrow" />
        </Link>
        <h1 className="details__title">Item Details</h1>
      </div>

      <div className="details__container">
        <div className="details__image-wrapper">
          <div className="details__image-container">
            <img
              src={`${baseUrl}${item.item_img}`}
              alt={item.item_name}
              className="details__image"
            />
          </div>
        </div>

        <div className="details__info-container">
          <div className="details__info-group">
            <p className="details__label">Item Name</p>
            <p className="details__text">{item.item_name}</p>
          </div>

          <div className="details__info-group">
            <p className="details__label">Price</p>
            <p className="details__text">${item.price}</p>
          </div>

          <div className="details__info-group">
            <p className="details__label">Description</p>
            <p className="details__text">{item.description}</p>
          </div>

          <div className="details__info-group">
            <p className="details__label">Link to Buy</p>
            <a
              href={item.purchase_link}
              target="_blank"
              rel="noopener noreferrer"
              className="details__link"
            >
              {item.purchase_link}
            </a>
          </div>

          <div className="details__buttons-container">
            <Link
              to={`/edit/${item_id}`}
              className="details__button details-edit-button"
            >
              EDIT
            </Link>
            <button
              className="details__button details-delete-button"
              onClick={() => setShowDeleteModal(true)}
            >
              DELETE
            </button>
          </div>
        </div>
      </div>

      <ItemDeleteModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onDelete={handleDelete}
        itemId={item_id}
        itemName={item.item_name}
      />
    </main>
  );
}

export default ItemDetails;
