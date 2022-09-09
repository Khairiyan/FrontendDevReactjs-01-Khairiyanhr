import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Routes, Link } from "react-router-dom";
import Homepage from "./layout/Homepage";
import DetailView from "./layout/DetailView";
import Login from "./layout/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/detail" element={<DetailView />} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </>
  );
}

export default App;
