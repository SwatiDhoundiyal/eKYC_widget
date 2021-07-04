import './App.css';
import { Header } from './Components/Header';
import { Widget } from "./Components/Widget";
import {
  BrowserRouter as Router
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Widget/>
    </Router>
    
  );
}

export default App;
