import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Listings from "./Listings";

function App() {
  return (
    <div style={{ margin: "20px" }}>
      <BrowserRouter>
        <nav style={{ marginBottom: "20px" }}>
          <span style={{ marginRight: "50px" }}>
            <Link to="/">Home</Link>
          </span>
          <span>
            <Link to="/show">Listings</Link>
          </span>
        </nav>
        <Routes>
          <Route index element={<Home />} />
          <Route path="show" element={<Listings />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
