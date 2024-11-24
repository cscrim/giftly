import { useEffect, useState } from "react";
import axios from "axios";
import "./Home.scss";
import profilePic from "../../assets/profile-pic.png";

function Home() {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const baseUrl = "http://localhost:8080";

  const fetchWishlistItems = async () => {
    try {
      const response = await axios.get(`${baseUrl}/wishlist`);
      setWishlistItems(response.data);
    } catch (err) {
      setError("Failed to fetch wishlist items");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWishlistItems();
  }, []);

  return (
    <main>
      <section className="profile-container">
        <div className="profile__picture-container">
          <img src={profilePic} alt="profile" className="courtneys-pic" />
        </div>
        <div className="profile__text-container">
          <h1 className="profile__text">Your Wish List</h1>
        </div>
      </section>

      <section className="gifts-container">
        <div className="card-container">
          {/* Add Item Section */}
          <div className="add-item-container">
            <button className="add-item-button">+ Add Item</button>
          </div>

          {/* Render wishlist items */}
          {wishlistItems.map((item) => (
            <div key={item.item_id} className="card">
              <div className="card-image-container">
                <img
                  src={item.item_img}
                  alt={item.item_name}
                  className="card-image"
                />
              </div>

              <div className="card-title">{item.item_name}</div>
              <div className="card-description">{item.description}</div>
              <div className="card-price">${item.price}</div>

              <button
                className="card-button"
                onClick={() => window.open(item.purchase_link, "_blank")}
              >
                BUY NOW
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
