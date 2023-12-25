import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Daftar from "./pages/daftar/Daftar";
import UsersList from "./pages/users/Users";
import UsersId from "./pages/users/UsersId";
import Forms from "./pages/forms/Forms";

function App() {
  return (
    <Routers>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UsersList />} />
        <Route path="/users/:id" element={<UsersId />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/login" element={<Login />} />
        <Route path="/daftar" element={<Daftar />} />
      </Routes>
    </Routers>
  );
}

export default App;
