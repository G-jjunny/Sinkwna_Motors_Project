import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import "antd/dist/reset.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Intro from "./pages/Intro";
import Reservation from "./pages/Reservation";
import Vehicle from "./pages/Vehicle";
import WayToCome from "./pages/WayToCome";
import { FloatButton } from "antd";
import { UserSwitchOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";

function App() {
  const [position, setPosition] = useState(0);
  function onScroll() {
    setPosition(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    console.log(position);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/vehicle" element={<Vehicle />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/waytocome" element={<WayToCome />} />
        </Routes>
        <FloatButton.BackTop />
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
