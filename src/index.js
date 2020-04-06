import React from 'react';
import ReactDOM from 'react-dom';
import Pokedex from './screen/Pokedex';
import * as serviceWorker from './serviceWorker';
import { GlobalStyle } from './style/main';
 
ReactDOM.render(
  <React.StrictMode>
    <Pokedex />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
