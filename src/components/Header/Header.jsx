import { Link } from 'react-router-dom';
import logo from '../../assets/giftly_logo.png';
import './Header.scss';


function Header() {
  return (
    <header className="header__container">
      <div className="header__logo-container">
        <img src={logo} alt="giftly-brand-logo" className="header__logo" />
      </div>
      <div className="header__title-container">
        <h1 className="header__title">
            giftly
        </h1>
      </div>
    </header>
  )
}

export default Header;


