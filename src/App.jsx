import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./componentes/navbar";
import Retrieve from "./componentes/retrieve";
import AddNewPerson from "./componentes/addperson";
function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<AddNewPerson />} />
          <Route path="/retrieve" element={<Retrieve />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
