import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Utilisez BrowserRouter, Routes et Route
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import SectionPhoto from './components/section-photo/SectionPhoto';
import SectionVideo from './components/section-video/SectionVideo';
import SectionTitre from './components/section-titre/SectionTitre';
import SectionItems from './components/section-items/SectionItems';
import SectionPresentation from './components/section-presentation/SectionPresentation';
import PageIdentification from './pages/identification/PageIdentification';
import PageInscription from './pages/inscription/PageInscription';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="flex flex-col justify-center min-h-screen py-2 text-white">
          <Routes>
            <Route path="/" element={
              <>
                <SectionPhoto />
                <SectionTitre />
                <SectionItems />
                <SectionPresentation />
                <SectionVideo />
              </>
            } />
            <Route path="/identifier" element={<PageIdentification />} />
            <Route path="/signup" element={<PageInscription />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
