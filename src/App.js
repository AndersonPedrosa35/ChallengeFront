import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Remove from './pages/Remove';
import Provider from './context/context';
import Home from './pages/Home';

function App({ testing }) {
  return (
    <BrowserRouter>
      <Route exact path="/" render={ () =>
        <Provider>
            <Home testing={ testing } />
        </Provider>
      } />
      <Route path="/remove" component={Remove} />
    </BrowserRouter>
  );
}

export default App;
