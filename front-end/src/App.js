import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Pages
import Homepage from './Pages/Homepage'

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />}/>
      </Routes>
    </Router>
  );
}

export default App;
