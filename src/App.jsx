import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import UserProfile from './pages/UserProfile/UserProfile';
import AddItem from './pages/AddItem/AddItem';
import ItemDetails from './pages/ItemDetails/ItemDetails';
import EditItem from './pages/EditItem/EditItem';
import './App.scss'



function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<UserProfile />} />
      <Route path="/add" element={<AddItem />} />
      <Route path="/edit/:id" element={<EditItem />} />
      <Route path="/details/:id" element={<ItemDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
