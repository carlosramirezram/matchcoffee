import logo from './logo.svg';
import './App.css';
import { DatePicker } from 'antd';
import { Encabezado } from './componentes/Encabezado';
import { Galeria } from './componentes/Galeria';

function App() {
  return (
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
    </div>
  );
}

export default App;
