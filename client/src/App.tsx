import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import AddLink from "./pages/AddLink";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="w-screen h-screen bg-black">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add" element={<AddLink />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
