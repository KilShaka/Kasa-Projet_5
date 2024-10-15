import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import "./styles/css/main.css";
import MainWrapper from "./components/common/MainWrapper";

function App() {
  return (
    <div className="app">
      <MainWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </MainWrapper>
    </div>
  );
}

export default App;
