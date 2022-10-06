import { Route, Routes } from "react-router-dom";
import "./App.css";
import Earn from "./components/Earn";
import Featured from "./components/Featured";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Review from "./components/Review";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/featured" element={<Featured />} />
        <Route path="/earn" element={<Earn />} />
        <Route path="/review" element={<Review />} />
      </Routes>
    </div>
  );
}

export default App;
