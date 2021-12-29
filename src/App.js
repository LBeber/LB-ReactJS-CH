import './App.css';
import NavBar from './Components/NavBar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { CartContextProvider } from './Context/CartContext/CartContext';
import Cart from './Components/Cart/Cart'

function App() {

  return (
    <div className="App">
      <CartContextProvider>
        <Router>
          <header className="App-header">
            <NavBar/>         
          </header>
          <div className='bgBody'>
            
            <div className="container">
              <Routes>
                <Route exact path='/' element={<ItemListContainer />} />
                <Route exact path='/category/:categoryId' element={<ItemListContainer />}/>
                <Route exact path='/detail/:productId' element={<ItemDetailContainer />}/> 
                <Route exact path='/cart' element={<Cart/>} />     
              </Routes> 
            </div> 
            </div>
        </Router>
      </CartContextProvider>
  </div>
  );
}

export default App;
