import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Daftar from "./pages/daftar/Daftar";

function App() {
  return (
    <Routers>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/daftar" element={<Daftar />} />
      </Routes>
    </Routers>
  );
}

export default App;
