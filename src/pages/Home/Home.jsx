import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import profilePic from "../../assets/profile-pic.png";
import Card from "../../components/Card/Card";
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
        <div className="profile__text-container">
          <h1 className="profile__text">My List</h1>
        </div>

        <div className="add-item-container">
          <Link to="/add">
            <button className="add-item-button">+ add item</button>
          </Link>
        </div>
      </section>

      <section className="gifts-container">
        <div className="card-container">
          {wishlistItems.map((item) => (
            <Card key={item.item_id} item={item} baseUrl={baseUrl} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
