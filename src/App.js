import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Container } from 'react-bootstrap';
import Home from './components/Home/Home';
import UserProfile from './components/UserProfile/UserProfile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <div className='background-pattern'>
          <Container className="py-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile/:mpsno" element={<UserProfile />} />
            </Routes>
          </Container>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
