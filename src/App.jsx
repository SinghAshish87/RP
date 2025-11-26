import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Pages/Navbar";
import Home from "./components/Pages/Home";
import AboutUs from "./components/Pages/About";
import Projects from "./components/Pages/Projects";
import ContactUs from "./components/Pages/Contact";
// import "./App.css"; // Assuming you have some basic 


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={AboutUs} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={ContactUs} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
