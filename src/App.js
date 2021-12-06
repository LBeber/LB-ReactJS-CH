import './App.css';
import Navbar from './Components/NavBar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
        <header className="App-header">
          <Navbar/>         
        </header>
        
        <div className="body">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-10">        
              <ItemListContainer />
            </div>
            <div className="col-10">
              <ItemDetailContainer />
            </div>
          
          </div>
        </div>
        </div>
  </div>
  );
}

export default App;
