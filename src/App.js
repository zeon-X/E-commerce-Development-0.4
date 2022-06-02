import { Route, Routes } from 'react-router-dom';
import './App.css';
import DisplayProducts from './components/DisplayProducts/DisplayProducts';
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
        <Route path='/pd' element={<ProductDetails></ProductDetails>}></Route>
        <Route path='/product' element={<DisplayProducts></DisplayProducts>}></Route>
      </Routes>


      <Footer></Footer>
    </div>
  );
}

export default App;
