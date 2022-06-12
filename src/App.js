import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Price from './pages/Price';
import { Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/about'>
        <About />
      </Route>
      <Route path="/stocks">
        <Dashboard />
      </Route>
      <Route path="/stocks/:symbol" render={(renderProps) => {
        return <Price {...renderProps} />
      }} />
    </div>
  );
}

export default App;