import { BrowserRouter, Route, Routes } from "react-router-dom";
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

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/vehicle" element={<Vehicle />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/waytocome" element={<WayToCome />} />
        </Routes>
        <FloatButton.BackTop />
        <FloatButton
          tooltip={<div>Admin</div>}
          icon={<UserSwitchOutlined />}
          style={{
            right: 90,
          }}
          e
        />
        {/* <FloatButton
          description="ADMIN"
          shape="square"
          style={{
            right: 94,
          }}
        /> */}
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
