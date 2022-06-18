import { Routes, Route } from "react-router-dom";
import '../App.scss';
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Dashboard from "./Dashboard";
import Stock from "./Stock";
import stocks from "./stock-data";


function App(props) {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/stocks"
          element={<Dashboard stocks={stocks} {...props} />}
        />
        <Route
          path="/stocks/:symbol"
          element={<Stock stocks={stocks} {...props} />}
        />
        </Routes>
    </div>
  );
}

export default App;