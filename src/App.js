import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Provider from './context/context';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" render={ () =>
        <Provider>
            <Home />
        </Provider>
      } />
    </BrowserRouter>
  );
}

export default App;
