import "./App.css";
import Navbar from "./Components/Navbar";
import Connect from "./Pages/Connect";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudyMaterial from "./Pages/StudyMaterial";
import HelpAndSupport from "./Pages/HelpAndSupport";
import Notfound from "./Pages/Notfound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact  path="/" element={<Home />}/>
          <Route path="/connect" element={<Connect />}/>
          <Route path="/studymaterial" element={<StudyMaterial />}/>
          <Route path="/helpandsupport" element={<HelpAndSupport/>}/>
          <Route path="" element={<Notfound/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
