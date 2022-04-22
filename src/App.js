import logo from './logo.svg';
import './App.css';
import GlobalStyle from './GlobalStyle';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
