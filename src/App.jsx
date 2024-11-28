import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import UserProfile from './pages/UserProfile/UserProfile';
import AddItem from './pages/AddItem/AddItem';
import ItemDetails from './pages/ItemDetails/ItemDetails';
import EditItem from './pages/EditItem/EditItem';
import Login from './pages/Login/Login';
import Friends from './pages/Friends/Friends';
import FriendWishlist from './pages/FriendWishlist/FriendWishlist';
import './App.scss'

import dogs from "./assets/teddyandrupes.png";
import josh from "./assets/josh.png";
import sarah from "./assets/sarah.png";

const friendsData = [
  {
    id: 1,
    name: "Teddy & Rupert",
    profileImage: dogs, 
    wishlist: [
      {
        id: 101,
        itemName: "Chuckit! Ultra Balls ",
        itemImage: "https://m.media-amazon.com/images/I/71I56DKOXmL.__AC_SX300_SY300_QL70_ML2_.jpg",
        description: "Durable rubber balls for fetch",
        price: "$18.99",
        buyLink: "https://www.chewy.com/ca/chuckit-ultra-rubber-ball-tough-dog/dp/1000028558",
        purchased: false
      },
      {
        id: 102,
        itemName: "Beef Liver Treats",
        itemImage: "https://m.media-amazon.com/images/I/916Bb1KHo8L.__AC_SX300_SY300_QL70_ML2_.jpg",
        description: "High protein dog treats made of real beef liver",
        price: "$32.99",
        buyLink: "https://www.petsmart.ca/dog/treats/soft-and-chewy-treats/benny-bullys-small-bites-dog-treats--natural-beef-liver-51245.html",
        purchased: false
      },
      {
        id: 103,
        itemName: "Bully Sticks",
        itemImage: "https://pvimages-prod.azureedge.net/FCM04489_p1.jpg?v=214527930&w=450&h=450",
        description: "Durable and long lasting dog chew",
        price: "$41.99",
        buyLink: "https://www.petvalu.ca/product/pet-center-bully-sticks-6in-dog-treats/FCM04489",
        purchased: true
      },
    ],
  },
  {
    id: 2,
    name: "Josh",
    profileImage: josh,
    wishlist: [
      {
        id: 201,
        itemName: "Headphones",
        itemImage: "https://i.ebayimg.com/images/g/IfkAAOSw-9Zf5Dmo/s-l1600.jpg",
        description: "Airpods Max noise cancelling headphones in Midnight",
        price: "$650.00",
        buyLink: "https://www.bestbuy.ca/en-ca/product/apple-airpods-max-usb-c-over-ear-noise-cancelling-bluetooth-headphones-midnight/18470961",
        purchased: false
      },
    ],
  },
  {
    id: 3,
    name: "Sarah",
    profileImage: sarah,
    wishlist: [
      {
        id: 301,
        itemName: "Espresso Machine",
        itemImage: "https://cb.scene7.com/is/image/Crate/BrevilleBaristaPrSSSSS21_VND?$web_pdp_main_carousel_med$",
        description: "Breville Barista Pro with frother and coffee grinder",
        price: "$950.00",
        buyLink: "https://www.bestbuy.ca/en-ca/product/breville-barista-pro-espresso-machine-with-frother-coffee-grinder-brushed-stainless-steel/13558678?source=collection&adSlot=1&slotPos=1",
        purchased: false
      },
      {
        id: 302,
        itemName: "Laptop Stand",
        itemImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJS-NcVshqfLn9lc0NEQAXkC8sFFRjbFKUig&s",
        description: "Ergonofis laptop stand in maple wood",
        price: "$245.00",
        buyLink: "https://ergonofis.com/products/the-fold-laptop-stand?variant=42380460327161",
        purchased: false
      },
    ],
  },
];



function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

const AppContent = () => {
  const location = useLocation();

  const hideHeaderOnPaths = ['/login'];

  return (
    <>
    
      {!hideHeaderOnPaths.includes(location.pathname) && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/add" element={<AddItem />} />
        <Route path="/edit/:item_id" element={<EditItem />} />
        <Route path="/details/:item_id" element={<ItemDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/friends" element={<Friends friendsData={friendsData} />} />
        <Route path="/friends/:id" element={<FriendWishlist friendsData={friendsData} />} />
      </Routes>
    </>
  );
};

export default App;
