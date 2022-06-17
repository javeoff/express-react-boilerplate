import React from 'react';
import { render } from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import { App } from './App';

const element = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

render(element, document.querySelector('#app'))
