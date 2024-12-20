import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/navbar/Navbar';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Detail from './components/detail/Detail';
import Products from './components/home/Products';
import { Provider } from 'react-redux';
import store, { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import Basket from './components/basket/Basket';
import Register from './components/user/Register';
import Login from './components/user/Login';
import { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () =>{
    setIsLoggedIn(true);
  };

  const handleLogout = () =>{
    setIsLoggedIn(false);
    alert('Çıkış yapıldı');
  }
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <Router>
      <div className="App">
        <div className='flex flex-col min-h-screen'>
          <NavbarComponent isLoggedIn={isLoggedIn} onLogout={handleLogout}/>
          <main className='flex-grow'>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/products' element={<Products/>}/>
              <Route path='/detail/:id' element={<Detail/>}/> 
              <Route path='/basket' element={<Basket/>}/>
              <Route path='/register' element={<Register/>}/>
              <Route path='/login' element={<Login onLoginSuccess={handleLoginSuccess}/>}/>
            </Routes>
          </main>
          <Footer/>
        </div>
      </div>
      </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
