import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing.jsx";
import Start from "./pages/Skills.jsx";
import Photographers from "./pages/Photographers.jsx";
// import './pages/Skills.jsx'
// import './pages/Photographers.jsx'
// import './pages/Landing.jsx'


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/start" element={<Start />} />
      <Route path="/photographers" element={<Photographers />} />
    </Routes>
  );
}
