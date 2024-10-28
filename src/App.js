import Router from "./routes/Router";
import "./styles/css/main.css";
import MainWrapper from "./components/common/MainWrapper";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";

function App() {
  return (
    <div className="app">
      <MainWrapper>
        <Navbar />
        <Router />
      </MainWrapper>
      <Footer />
    </div>
  );
}

export default App;
