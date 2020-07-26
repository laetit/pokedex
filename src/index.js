import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Pokedex from './pages/pokedex'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Pokedex />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
