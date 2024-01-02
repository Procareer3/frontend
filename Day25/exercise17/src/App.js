import Home from './components/Home';
import MyNavBar from './components/MyNavbar';
import MyFooter from './components/MyFooter';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from './components/About-us';
import ContactUs from './components/Contact-us';
import Products from './components/Products';


function App() {
  return (
    <BrowserRouter>
      <MyNavBar/>

      <div>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about-us" element={<AboutUs/>}/>
            <Route path="/contact-us" element={<ContactUs/>}/>
            <Route path="/products" element={<Products/>}/>
          </Routes>
      </div>

      <MyFooter/>
    </BrowserRouter>
  );
}

export default App;
