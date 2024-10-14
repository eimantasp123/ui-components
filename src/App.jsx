import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import DarkModeButton from "././components/DarkModeButton";
import Layout from "./components/Layout";

const App = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/dark-mode" element={<DarkModeButton />} />
    </Route>
  </Routes>
);

export default App;
