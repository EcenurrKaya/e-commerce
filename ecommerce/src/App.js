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

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <Router>
      <div className="App">
        <div className='flex flex-col min-h-screen'>
          <NavbarComponent/>
          <main className='flex-grow'>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/products' element={<Products/>}/>
              <Route path='/detail/:id' element={<Detail/>}/> 
              <Route path='/basket' element={<Basket/>}/>
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
