import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./EditItem.scss";

function EditItem() {
  const { item_id } = useParams();  // Get the item_id from the URL
  const [item, setItem] = useState(null);
  const navigate = useNavigate();  // Hook for navigation

  const baseUrl = "http://localhost:8080";

  useEffect(() => {
    const fetchItemDetails = async () => {
      try {
        const response = await axios.get(`${baseUrl}/wishlist/details/${item_id}`);
        setItem(response.data);
      } catch (error) {
        console.error("Error fetching item details:", error);
        // You could display an error message here for better UX.
      }
    };

    fetchItemDetails();
  }, [item_id]);

  // If item data is still loading, display a loading message
  if (!item) {
    return <div>Loading...</div>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the updated item data to the server
      await axios.put(`${baseUrl}/wishlist/edit/${item_id}`, item);
      navigate(`/details/${item_id}`);  // Redirect to the item details page after edit
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem((prevItem) => ({
      ...prevItem,
      [name]: value,  // Update the field based on the name of the input
    }));
  };

  return (
    <main>
    <div>
      <h1>Edit Item</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Item Name:</label>
          <input
            type="text"
            name="item_name"
            value={item.item_name || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={item.price || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={item.description || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Link to Buy:</label>
          <input
            type="url"
            name="purchase_link"
            value={item.purchase_link || ""}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
    </main>
  );
}

export default EditItem;
