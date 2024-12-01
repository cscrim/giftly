import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import backArrow from "../../assets/backarrow.png";
import profilePic from "../../assets/profile-pic.png";
import "./UserProfile.scss";

function UserProfile() {
  const birthday = new Date("June 1");

  const [daysRemaining, setDaysRemaining] = useState(0);

  const calculateDaysUntilBirthday = () => {
    const today = new Date();

    const nextBirthday = new Date(
      today.getFullYear(),
      birthday.getMonth(),
      birthday.getDate()
    );

    if (nextBirthday < today) {
      nextBirthday.setFullYear(today.getFullYear() + 1);
    }

    const timeDifference = nextBirthday - today;
    const daysLeft = Math.floor(timeDifference / (1000 * 3600 * 24));
    return daysLeft;
  };

  useEffect(() => {
    const days = calculateDaysUntilBirthday();
    setDaysRemaining(days);
  }, []);

  const formattedBirthday = birthday.toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const getPillColor = () => {
    if (daysRemaining > 30) {
      return "green";
    } else if (daysRemaining <= 30 && daysRemaining > 14) {
      return "yellow";
    } else {
      return "red";
    }
  };

  return (
    <main>
      <section className="profile__header-container">
        <Link to="/">
          <img src={backArrow} alt="back-arrow" className="back-arrow" />
        </Link>
        <h1 className="profile__title">My profile</h1>
      </section>

      <section className="profile__content">
        <div className="profile__image-container">
          <img src={profilePic} alt="Profile" className="profile__image" />
        </div>

        <div className="profile__details-section">
          <div className="profile__detail">
            <label className="profile__label">Birthday</label>
            <div className="profile__value">
              {formattedBirthday}
              <span className={`countdown-pill ${getPillColor()}`}>
                {daysRemaining} days left
              </span>
            </div>
          </div>

          <div className="profile__detail">
            <label className="profile__label">Hobbies</label>
            <div className="profile__value">
              Mechanical Keyboards, Motorsports, Pokémon
            </div>
          </div>
          <div className="profile__detail">
            <label className="profile__label">Sizes</label>
            <div className="profile__value">Shoes: 6, Clothing: XS</div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default UserProfile;
