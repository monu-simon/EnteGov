import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Container, Spinner } from 'react-bootstrap';
import Home from './components/Home/Home';
import UserProfile from './components/UserProfile/UserProfile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Party from './components/Party/Party';
import { useLoading } from './components/Context/LoadingContext';

function App() {
  const {isLoading} = useLoading();
  return (
    <Router>
      <div>
        <Header />
        <div className='background-pattern'>
          <Container className="py-4">
            {
              isLoading && (
                <div className="text-center spinner-container">
                <Spinner animation="grow" variant='dark' role="status">
                  
                </Spinner>
              </div>
              )
            }
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path="/members" element={<Home />} />
              <Route path="/profile/:mpsno" element={<UserProfile />} />
              <Route path="/party" element={<Party />} />
              
            </Routes>
          </Container>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
