import ItemsListContainer from './componentes/navbar/ItemsListContainer/ItemsListContainer';
import './App.css';
import Navbar from './componentes/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemsListContainer greeting={"Hola Bienvenidos a PuntoSano Tienda Saludable"}/>
    </div>
  );
}

export default App;
