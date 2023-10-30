import Navbar from './components/Navbar.js';
import './App.css';
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import SeoPage from './pages/SeoPage.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" exact Component={HomePage} />
          <Route path="/seo" exact Component={SeoPage} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
