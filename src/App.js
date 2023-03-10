import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { FloralCandleSoul } from "./components/FloralCandleSoul/FloralCandleSoul";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { LumiBlossomos } from "./components/LumiBlossomos/LumiBlossomos";
import { LumiCandle } from "./components/LumiCandle/LumiCandle";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lumiblossomos" element={<LumiBlossomos />} />
          <Route path="/floralcandlesoul" element={<FloralCandleSoul />} />
          <Route path="/lumicandle" element={<LumiCandle />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
