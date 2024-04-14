import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div>
    <Header/>
    <Container className='py-4'>
        {/* You can add content here or leave it empty for now */}
        <h1>Welcome to My React App!</h1>
        <p>This is a simple text inside a Bootstrap container.</p>
      </Container>
    <Footer/>

    </div>
  );
}

export default App;
