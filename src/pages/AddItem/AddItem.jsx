import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
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
  const [selectedImage, setSelectedImage] = useState(""); 
  const [imageOptions] = useState([
    "/images/uggs.png",
    "/images/superpuff.png",
    "/images/beanie.png",
  ]);

  
  const [imageSrc, setImageSrc] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!itemName || !itemPrice || !selectedImage) {
      alert("Please fill in all required fields!");
      return;
    }
  
    const formData = {
      item_name: itemName,
      price: itemPrice,
      description: itemDescription,
      purchase_link: purchaseLink,
      item_img: selectedImage,  
    };
  
    try {
      const response = await axios.post(`${baseUrl}/wishlist`, formData, {
        headers: {
          "Content-Type": "application/json",  
        },
      });
  
      console.log("Item added successfully:", response.data);
  
      alert("Item added successfully!");
  
      navigate("/");
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
                  style={{ width: '500px', height: '500px' }}
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
      
              <select
                id="image-select"
                value={selectedImage}
                onChange={(e) => {
                  setSelectedImage(e.target.value);
                  setImageSrc(`${baseUrl}${e.target.value}`); 
                }}
                required
              >
                <option value=""> Choose an Image </option>
                {imageOptions.map((imageUrl) => (
                  <option key={imageUrl} value={imageUrl}>
                    {imageUrl}
                  </option>
                ))}
              </select>

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