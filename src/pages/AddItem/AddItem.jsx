import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import utils from "../../utils";
import backArrow from "../../assets/back_arrow.png";
import logo from "../../assets/giftly_logo.png";
import "./AddItem.scss";

function AddItem() {
  const baseUrl = "http://localhost:8080";

  const navigate = useNavigate();

  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [purchaseLink, setPurchaseLink] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const [imageSrc, setImageSrc] = useState("");

  const onFileSelect = (e) => {
    const file = e.target.files[0];

    if (utils.verifyImageFile(file)) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => setImageSrc(reader.result); 
      reader.readAsDataURL(file);
    } else {
      setImageFile(null); 
      setImageSrc(""); 
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!itemName || !itemPrice || !imageFile) {
      alert("Please fill in all required fields!");
      return;
    }

    const formData = new FormData();
    formData.append("item_name", itemName);
    formData.append("price", itemPrice);
    formData.append("description", itemDescription);
    formData.append("purchase_link", purchaseLink);
    formData.append("item_img", imageFile); // this should be the URL returned from the image upload

    try {
      const response = await axios.post(`${baseUrl}/wishlist/add`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Item added successfully:", response.data);

      alert("Item added successfully!");

      navigate("/wishlist");
    } catch (error) {
      console.error("Error adding item:", error);
      alert("There was an error adding the item.");
    }
  };

  return (
    <main>
      <div className="add__header-container">
        <Link to="/">
          <img src={backArrow} alt="back-arrow" className="back-arrow" />
        </Link>
        <h1 className="add__title">Add a New Gift</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="upload__container">
          <div className="upload__image-wrapper">
            <div className="upload__image-container">
              {imageSrc ? (
                <img
                  src={imageSrc}
                  alt="Image Preview"
                  className="upload__image-preview"
                />
              ) : (
                <img
                  src={logo}
                  alt="giftly-logo-outline"
                  className="upload-placeholder"
                />
              )}
            </div>

            <div className="upload__button-container">
              <input
                type="file"
                accept="image/jpeg, image/png"
                onChange={onFileSelect}
                className="upload__image-input"
              />
            </div>
          </div>


          <div className="upload__details-container">
            <div className="upload__input-group">
              <label htmlFor="item-name" className="upload__label">
                Item Name
              </label>
              <input
                type="text"
                id="item-name"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                required
                className="upload__input"
              />
            </div>

            <div className="upload__input-group">
              <label htmlFor="price" className="upload__label">
                Price
              </label>
              <input
                type="number"
                id="price"
                value={itemPrice}
                onChange={(e) => setItemPrice(e.target.value)}
                required
                className="upload__input"
              />
            </div>

            <div className="upload__input-group">
              <label htmlFor="description" className="upload__label">
                Description
              </label>
              <textarea
                id="description"
                value={itemDescription}
                onChange={(e) => setItemDescription(e.target.value)}
                className="upload__input description-input"
              />
            </div>

            <div className="upload__input-group">
              <label htmlFor="purchase-link" className="upload__label">
                Link to Buy
              </label>
              <input
                type="url"
                id="purchase-link"
                value={purchaseLink}
                onChange={(e) => setPurchaseLink(e.target.value)}
                className="upload__input"
              />
            </div>

            <div className="submit-button-container">
              <button type="submit" className="submit-button">
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
}

export default AddItem;


