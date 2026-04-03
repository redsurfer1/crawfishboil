import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import GuestPath from './components/GuestPath';
import HostPath from './components/HostPath';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <GuestPath />
        <HostPath />
      </main>
      <Footer />
    </div>
  );
}

export default App;
