import React from 'react';
import { Header } from './modules/Header';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './global/router/Routes';
import { Footer } from './modules/Footer'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <AppRoutes />
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
