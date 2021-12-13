import './App.css';
import Navbar from './Components/NavBar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'



function App() {
  return (
    <div className="App">
        <Router>
        <header className="App-header">
          <Navbar/>         
        </header>
        <div className="body">
        <div className="container">
          <div className="row justify-content-center align-items-center">
          <Routes>
              <Route exact path='/' element={<ItemListContainer />} />
              <Route exact path='/category/:categoryId' element={<ItemListContainer />}/>
              <Route exact path='/detail/:productId' element={<ItemDetailContainer />}/>        
          </Routes> 
          </div> 
        </div>
        </div>
        </Router>
  </div>
  );
}

export default App;
