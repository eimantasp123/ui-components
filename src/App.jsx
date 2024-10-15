import { Route, Routes } from "react-router-dom";
import DarkModeButton from "././components/DarkModeButton";
import DarkModeToggleSecondary from "./components/DarkModeButtonSecondary";
import Layout from "./components/Layout";
import FullButtons from "./FullButtons";
import Home from "./Home";
import PasswordStrength from "./PasswordStrength";

const App = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/dark-mode" element={<DarkModeButton />} />
      <Route path="/dark-mode-2" element={<DarkModeToggleSecondary />} />
      <Route path="/full-color-buttons" element={<FullButtons />} />
      <Route path="/strength-indicator" element={<PasswordStrength />} />
    </Route>
  </Routes>
);

export default App;
