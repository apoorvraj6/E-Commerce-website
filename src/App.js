import Navbar from "./Components/Navbar";
import "./App.css";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import ShopCategory from "./Pages/ShopCategory";
import women_fashion_banner from "./Components/Assets/women_fashion_banner.jpg";
import mens_fashion_banner from "./Components/Assets/mens_fashion_banner.jpg";
import beauty_banner from "./Components/Assets/beauty_banner.jpg";
import sports_banner from "./Components/Assets/sports_banner.jpg";
import home_banner from "./Components/Assets/home_banner.jpg";
import electronics_banner from "./Components/Assets/electronics_banner.jpg";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Wishlist from "./Pages/Wishlist";
import CheckOut from "./Pages/CheckOut";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/mens-fashion"
            element={
              <ShopCategory
                category="mens-fashion"
                banner={mens_fashion_banner}
              />
            }
          />
          <Route
            path="/women-fashion"
            element={
              <ShopCategory
                category="womens-fashion"
                banner={women_fashion_banner}
              />
            }
          />
          <Route
            path="/electronics"
            element={
              <ShopCategory
                category="electronics"
                banner={electronics_banner}
              />
            }
          />
          <Route
            path="/home-lifestyle"
            element={
              <ShopCategory category="home&lifestyle" banner={home_banner} />
            }
          />
          <Route
            path="/sports"
            element={<ShopCategory category="sports" banner={sports_banner} />}
          />
          <Route
            path="/beauty"
            element={<ShopCategory category="beauty" banner={beauty_banner} />}
          />
          <Route path="product" element={<Product />}>
            <Route path=":productId" />
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/wishlist' element={<Wishlist/>}/>
          <Route path='/checkout' element={<CheckOut/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
