import { Link } from 'react-router-dom';
import logo from '../../assets/giftly_logo.png';
import './Header.scss';


function Header() {
  return (
    <header className="header__container">
      <div className="header__left-container">
      <div className="header__logo-container">
        <Link to= "/">
        <img src={logo} alt="giftly-brand-logo" className="header__logo" />
        </Link> 
      </div>
      <div className="header__title-container">
        <h1 className="header__title">
            giftly
        </h1>
      </div>
      </div>

      <div className="header__right-container">
        <Link to="/friends" className="header__friends-link">friends</Link>
        <Link to="/login" className="header__logout-pill">logout</Link>
      </div>

    </header>
  )
}

export default Header;


