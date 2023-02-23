import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { FloralCandleSoul } from "./components/FloralCandleSoul/FloralCandleSoul";
import { LumiBlossomos } from "./components/LumiBlossomos/LumiBlossomos";
import { LumiCandle } from "./components/LumiCandle/LumiCandle";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/lumiblossomos" element={<LumiBlossomos />} />
          <Route path="/floralcandlesoul" element={<FloralCandleSoul />} />
          <Route path="/lumicandle" element={<LumiCandle />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

{
  /* <h1>moonbloom</h1>
<h1>Candlearia</h1>
<h1>SerenityCandle</h1> */
}
