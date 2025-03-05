import React from 'react';
import { Header } from './modules/Header';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './global/router/Routes';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
