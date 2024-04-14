import "./App.css";
import Navbar from "./Components/Navbar";
import Connect from "./Pages/Connect";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudyMaterial from "./Pages/StudyMaterial";
import HelpAndSupport from "./Pages/HelpAndSupport";
import Notfound from "./Pages/Notfound";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { useState } from "react";
import Alert from "./Components/Alert";

function App() {
  
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{

          
        setAlert({
              msg:message,
              type:type
                })
              setTimeout(() => {
                setAlert(null);
              }, 1500);
             
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Alert alert={alert}/>
        <Routes>
          <Route exact  path="/" element={<Home  />}/>
          <Route path="/connect" element={<Connect />}/>
          <Route path="/studymaterial" element={<StudyMaterial />}/>
          <Route path="/helpandsupport" element={<HelpAndSupport/>}/>
          <Route path="" element={<Notfound/>}/>
          <Route path="/login" element={<Login showAlert={showAlert}/>} />
          <Route path="/signup" element={<Signup showAlert={showAlert} />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
