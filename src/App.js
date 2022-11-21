import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Intro from "./pages/Intro";
import Reservation from "./pages/Reservation";
import Vehicle from "./pages/Vehicle";
import WayToCome from "./pages/WayToCome";
import { FloatButton } from "antd";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/vehicle" element={<Vehicle />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/waytocome" element={<WayToCome />} />
      </Routes>
      <Footer />
      <FloatButton.BackTop />
    </BrowserRouter>
  );
}

export default App;
