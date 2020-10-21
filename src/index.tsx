import React from 'react';
import ReactDOM from 'react-dom'; /*integrando react com a dom*/

import App from './App';


ReactDOM.render(
  /*recebe um conteudo podendo ser html e coloca dentro de um elemento no html que e o root */
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
