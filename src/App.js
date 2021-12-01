import './App.css';
import Navbar from './Components/NavBar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>         
      </header>
      <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-10">        
           <ItemListContainer />
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
