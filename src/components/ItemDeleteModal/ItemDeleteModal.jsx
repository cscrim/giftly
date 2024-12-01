import { useNavigate } from "react-router-dom";
import "./ItemDeleteModal.scss";

const ItemDeleteModal = ({ isOpen, onClose, onDelete, itemId, itemName }) => {
  if (!isOpen) return null;

  const navigate = useNavigate();

  const handleDeleteClick = () => {
    if (itemId) {
      onDelete(itemId);
      navigate("/");
    }
  };

  const handleCancelClick = () => {
    onClose();
  };

  return (
    <div className="modalWrapper">
      <div className="modalOverlay">
        <div className="modalContent">
          <h1>Delete {itemName}?</h1>
          <h2>
            Please confirm you'd like to delete the {itemName} from your
            wishlist. This action cannot be undone.
          </h2>
        </div>

        <div className="modalButtons">
          <button className="cancel" onClick={handleCancelClick}>
            CANCEL
          </button>
          <button className="delete" onClick={handleDeleteClick}>
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDeleteModal;
