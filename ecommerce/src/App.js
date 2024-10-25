import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/navbar/Navbar';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <div className='flex flex-col min-h-screen'>
        <NavbarComponent/>
        <Home/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
