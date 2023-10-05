import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Home } from "./Components/Home/Home";
import { Navbar } from "./Components/Navbar/Navbar";
import { Products } from "./Components/Products/Products";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
