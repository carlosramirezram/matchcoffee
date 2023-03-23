import logo from './logo.svg';
import './App.css';
import { DatePicker } from 'antd';
import { Encabezado } from './componentes/Encabezado';
import { Galeria } from './componentes/Galeria';

function App() {
  return (
<<<<<<< HEAD
    <div class="container">
      <div class="header">
        prueba
        <Encabezado></Encabezado>
      </div>
      <div class="banner">
        <Galeria></Galeria>
      </div>
      <div class="body"></div>
      <div class="footer"></div>
=======
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Editar <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
>>>>>>> 97c94f784947a6a150f3a4434d81c6c6ded67148
    </div>
  );
}

export default App;
