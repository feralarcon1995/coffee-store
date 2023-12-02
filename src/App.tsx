import { Routes, Route } from 'react-router-dom';
//components
import Footer from './components/Footer';
import NavBar from './components/NavBar';
//pages
import Home from "./pages/Home"
import CoffeeStore from './pages/CoffeeStore';
import Favourites from './pages/Favourites';

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coffee-store" element={<CoffeeStore />} />
        <Route path="/favourite-coffees" element={<Favourites />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
