import "./App.css";
import GlobalStyle from "./GlobalStyle";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Leadership from "./pages/Leadership";
import Activities from "./pages/Activities";
import Structure from "./pages/Structure";
import OrgansAndClubs from "./pages/OrgansAndClubs";
import Contact from "./pages/Contact";
import Support from "./pages/Support";
import MainPanel from "./components/MainPanel";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
function App() {
  const location = useLocation();
  return (
    <div>
      <GlobalStyle />
      <MainPanel>
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/Structure" element={<Structure />} />
            <Route path={`/Organs${"&"}Clubs`} element={<OrgansAndClubs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </AnimatePresence>
      </MainPanel>
    </div>
  );
}

export default App;
