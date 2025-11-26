import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Projects from "./components/Pages/Projects";
import Contact from "./components/Pages/Contact";
import "./App.css"; // Assuming you have some basic 


function App() {          
  return (
    <BrowserRouter>
    <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contact" element={<Contact/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
