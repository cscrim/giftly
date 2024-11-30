import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import backArrow from "../../assets/backarrow.png";
import "./EditItem.scss";

function EditItem() {
  const { item_id } = useParams();
  const navigate = useNavigate();

  const [item, setItem] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");

  const baseUrl = "http://localhost:8080";

  useEffect(() => {
    const fetchItemDetails = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/wishlist/details/${item_id}`
        );
        setItem(response.data);

        setSelectedImage(response.data.item_img);
      } catch (error) {
        console.error("Error fetching item details:", error);
      }
    };

    fetchItemDetails();
  }, [item_id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      item_name: item.item_name,
      price: item.price,
      description: item.description,
      purchase_link: item.purchase_link,
      item_img: selectedImage,
    };

    try {
      const response = await axios.put(
        `${baseUrl}/wishlist/edit/${item_id}`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      navigate("/");
    } catch (error) {
      console.error("Error updating item:", error);
      alert("There was an error updating the item.");
    }
  };

  const handleImageChange = (e) => {
    const imagePath = e.target.value;
    setSelectedImage(imagePath);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  if (!item) return <div>Loading...</div>;

  return (
    <main>
      <div className="edit__header-container">
        <Link to="/">
          <img src={backArrow} alt="back-arrow" className="back-arrow" />
        </Link>
        <h1 className="edit__title">Edit Item</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="edit__container">
          <div className="edit__image-wrapper">
            <div className="edit__image-container">
              {selectedImage ? (
                <img
                  src={`http://localhost:8080${selectedImage}`}
                  alt="Image Preview"
                  className="edit__image-preview"
                />
              ) : (
                <div className="edit__image-placeholder">No image selected</div>
              )}
            </div>

            <select
              id="image-select"
              value={selectedImage}
              onChange={handleImageChange}
              required
            >
              <option value="">Choose a New Image</option>
              <option value="/images/uggs.png">UGGs Side View</option>
              <option value="/images/superpuff.png">Super Puff</option>
              <option value="/images/beanie.png">Beanie</option>
              <option value="/images/uggs2.png">UGGs Top View</option>
            </select>
          </div>

          <div className="edit__info-container">
            <div className="edit__input-group">
              <label htmlFor="item-name" className="edit__label">
                Item Name
              </label>
              <input
                type="text"
                id="item-name"
                name="item_name"
                value={item.item_name}
                onChange={handleChange}
                required
                className="edit__input"
              />
            </div>

            <div className="edit__input-group">
              <label htmlFor="price" className="edit__label">
                Price
              </label>
              <input
                type="number"
                id="price"
                name="price"
                value={item.price}
                onChange={handleChange}
                required
                className="edit__input"
              />
            </div>

            <div className="edit__input-group">
              <label htmlFor="description" className="edit__label">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={item.description}
                onChange={handleChange}
                className="edit__input description-input"
              ></textarea>
            </div>

            <div className="edit__input-group">
              <label htmlFor="purchase-link" className="edit__label">
                Purchase Link
              </label>
              <input
                type="url"
                id="purchase-link"
                name="purchase_link"
                value={item.purchase_link}
                onChange={handleChange}
                className="edit__input"
              />
            </div>

            <div className="submit-button-container">
              <button type="submit" className="submit-button edit-save-button">
                SAVE
              </button>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
}

export default EditItem;
