import { Route, Routes } from "react-router-dom";
import "./App.css";
import Earn from "./components/Earn";
import Featured from "./components/Featured";
import Home from "./components/Home";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/featured" element={<Featured />} />
        <Route path="/earn" element={<Earn />} />
      
      </Routes>
    </div>
  );
}

export default App;
