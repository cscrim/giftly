import { Link } from "react-router-dom";
import { useState } from "react";
import logo2 from "../../assets/giftlylogo2.png";
import dropdownArrow from "../../assets/dropdown.png";
import "./Header.scss";

function Header() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible((prev) => !prev);
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  return (
    <header className="header__container">
      <div className="header__left-container">
        <div className="header__logo-container">
          <Link to="/">
            <img src={logo2} alt="giftly-brand-logo" className="header__logo" />
          </Link>
        </div>
        <div className="header__title-container">
          <h1 className="header__title">giftly</h1>
        </div>
      </div>

      <div className="header__right-container">
        <div className="header__dropdown">
          <button className="header__dropdown-button" onClick={toggleDropdown}>
            <img
              src={dropdownArrow}
              alt="dropdown-arrow"
              className={`header__dropdown-icon ${
                dropdownVisible ? "rotated" : ""
              }`}
            />
          </button>

          {dropdownVisible && (
            <div className="header__dropdown-menu">
              <Link
                to="/profile"
                className="header__dropdown-item"
                onClick={closeDropdown}
              >
                Profile
              </Link>
              <Link
                to="/friends"
                className="header__dropdown-item"
                onClick={closeDropdown}
              >
                Friends
              </Link>
              <Link
                to="/login"
                className="header__dropdown-item"
                onClick={closeDropdown}
              >
                Logout
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
