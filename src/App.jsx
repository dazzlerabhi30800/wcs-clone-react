import "./Styles/style.scss";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import ServicesPage from "./pages/Services/ServicesPage";
import PortfolioPage from "./pages/Portfolio/PortfolioPage";
import BlogPage from "./pages/Blog/BlogPage";
import AboutPage from "./pages/About/AboutPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
