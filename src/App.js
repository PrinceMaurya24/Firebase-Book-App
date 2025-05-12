import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
import RegisterPage from "./pages/Register";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login";
function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
