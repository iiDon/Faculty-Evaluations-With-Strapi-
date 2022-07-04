import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
function App() {
  //Pages

  return (
    <Router>
      <Header />

      <Routes></Routes>
    </Router>
  );
}

export default App;
