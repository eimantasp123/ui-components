import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import DarkModeButton from "././components/DarkModeButton";
import Layout from "./components/Layout";
import DarkModeToggleSecondary from "./components/DarkModeButtonSecondary";

const App = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/dark-mode" element={<DarkModeButton />} />
      <Route path="/dark-mode-2" element={<DarkModeToggleSecondary />} />
    </Route>
  </Routes>
);

export default App;
