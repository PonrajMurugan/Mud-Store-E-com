import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; 
import App from './App';
import { Provider } from 'react-redux'; 
import store from '../src/Components/Redux/store'; 

import 'aos/dist/aos.css'; 
import AOS from 'aos';

AOS.init({
  duration: 3000, 
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
