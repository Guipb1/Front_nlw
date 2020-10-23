/*o APP é um COMPONENTE = é uma funcao que retorna html ou jsx e tem a primeira letra maiuscula*/
import React from 'react';

/*as importacoes de CSS, HTML,sao feitas no arquivo javascritp*/
import './styles/global.css';
import 'leaflet/dist/leaflet.css'; /*estilização padrao do mapa*/

import Routes from './routes';




/*esta sendo usado html dentro do javascript*/
/* no REACT sempr que tiver {} estou tentando inserir uma variavel do javascript dentro do html*/
function App() {
  return (
    <Routes />
  );
}

export default App;
