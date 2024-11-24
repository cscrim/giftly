import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import profilePic from "../../assets/profile-pic.png";
import "./Home.scss";

function Home() {
  const [wishlistItems, setWishlistItems] = useState([]);

  const baseUrl = "http://localhost:8080";

  const fetchWishlistItems = async () => {
    try {
      const response = await axios.get(`${baseUrl}/wishlist`);
      setWishlistItems(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchWishlistItems();
  }, []);

  return (
    <main>
      <section className="profile-container">
        <Link to="/profile" className="profile__picture-selected">
          <div className="profile__picture-container">
            <img src={profilePic} alt="profile" className="courtneys-pic" />
            <div className="hover-text">
              <p>profile</p>
            </div>
          </div>
        </Link>

        <div className="profile__text-container">
          <h1 className="profile__text">your wish list</h1>
        </div>
      </section>

      <section className="gifts-container">
        <div className="card-container">
          <div className="add-item-container">
            <Link to="/add">
              <button className="add-item-button">+ add item</button>
            </Link>
          </div>

          {wishlistItems.map((item) => (
            <div key={item.item_id} className="card">
              <Link to={`/details/${item.item_id}`} className="card-link">
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
              </Link>

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
