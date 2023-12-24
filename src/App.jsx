import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import { DefaultSidebar } from "./components/Sidebar";

function App() {
  return (
    <Routers>
      <DefaultSidebar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Routers>
  );
}

export default App;
