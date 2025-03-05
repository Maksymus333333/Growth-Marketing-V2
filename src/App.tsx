import React from 'react';
import { Header } from './modules/Header';
import { LandingPage } from './pages/LandingPage';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <LandingPage />
      </div>
    </BrowserRouter>
  );
}

export default App;
