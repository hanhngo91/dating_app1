import { Routes, Route } from "react-router-dom";
import Home from "./pages/Homepage/Home";
import DashBoard from "./pages/DashBoard/DashBoard";
import OnBoarding from "./pages/OnBoarding/OnBoarding";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/onboarding" element={<OnBoarding />} />
      </Routes>
    </div>
  );
}

export default App;
