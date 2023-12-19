import React from 'react';
import ReactDOM from 'react-dom/client';
import Counter from './components/OOPCounter/Counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Counter heading="Kmin Counter" start='0' end='10'/>
  </React.StrictMode> 
);


