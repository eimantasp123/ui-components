import { Route, Routes } from "react-router-dom";
import Home from "./Home";

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<h1 className="text-black">About</h1>} />
    <Route path="/services" element={<h1>Services</h1>} />
    <Route path="/contact" element={<h1>contact</h1>} />
  </Routes>
);

export default App;
