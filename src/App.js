import logo from "./logo.svg";
import "./App.css";
import GlobalStyle from "./GlobalStyle";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Leadership from "./pages/Leadership";
import Activities from "./pages/Activities";
import Structure from "./pages/Structure";
import OrgansAndClubs from "./pages/OrgansAndClubs";
function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/Structure" element={<Structure />} />
        <Route path={`/Organs${'&'}Clubs`} element={<OrgansAndClubs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
