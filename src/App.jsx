import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Login from "./pages/Login"
import Signup from "./pages/Signup";
import { useState } from "react"
import Footer from "./components/Footer"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div >
      <div>
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      </div>
      <Routes>
        
              <Route path="/" element={<Home/>}/>
              <Route path="/cart" element={<Cart/>}/>
              <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
              <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
             
      </Routes>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default App
