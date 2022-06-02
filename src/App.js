import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header/Header';
import Home from './components/Home/Home/Home';
import ProductDetails from './components/ProductDetails/ProductDetails/ProductDetails';

function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/product' element={<ProductDetails></ProductDetails>}></Route>
      </Routes>


      <Footer></Footer>
    </div>
  );
}

export default App;
