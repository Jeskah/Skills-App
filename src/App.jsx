import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing.jsx";
import Start from "./pages/Skills.jsx";
import Photographers from "./pages/Photographers.jsx";
import Profile from "./components/ProfileCard.jsx";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/start" element={<Start />} />
      <Route path="/photographers" element={<Photographers />} />
    </Routes>
  );
}
