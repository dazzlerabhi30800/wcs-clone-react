import "./Styles/style.scss";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import ServicesPage from "./pages/Services/ServicesPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
