import "./ItemDeleteModal.scss"; 
// import cancelIcon from "../../assets/Icons/close-24px.svg";

const ItemDeleteModal = ({
  isOpen,
  onClose,
  onDelete,
  itemId,
  itemName,
}) => {
  if (!isOpen) return null;

  const handleDeleteClick = () => {
    if (itemId) {
      onDelete(itemId); 
    }
  };

  const handleCancelClick = () => {
    onClose();  
  };

  return (
    <div className="modalWrapper">
      <div className="modalOverlay">
        {/* <button className="exit__button" onClick={handleCancelClick}>
          <img src={cancelIcon} alt="Cancel" />
        </button> */}

        <div className="modalContent">
          <h1>Delete {itemName}?</h1>
          <h2>
            Please confirm you'd like to delete the item from your wishlist.
            This action cannot be undone.
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