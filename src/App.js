import "./App.css";
import { lazy, Suspense } from "react";
import GlobalStyle from "./GlobalStyle";
import { Routes, Route } from "react-router-dom";
import MainPanel from "./components/MainPanel";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Leadership = lazy(() => import("./pages/Leadership"));
const Activities = lazy(() => import("./pages/Activities"));
const Structure = lazy(() => import("./pages/Structure"));
const OrgansAndClubs = lazy(() => import("./pages/OrgansAndClubs"));
const Contact = lazy(() => import("./pages/Contact"));
const Support = lazy(() => import("./pages/Support"));

function App() {
  const location = useLocation();
  return (
    <Suspense fallback={<></>}>
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
    </Suspense>
  );
}

export default App;
