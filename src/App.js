import logo from "./logo.svg";
import "./App.css";
import GlobalStyle from "./GlobalStyle";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
