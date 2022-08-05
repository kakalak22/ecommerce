import './App.scss';

import Header from './SitePart/Header';
import Home from './SitePart/Home';
import Footer from './component/Footer/Footer';

import { useEffect } from 'react';
import ItemDetail from './component/ItemDetail/ItemDetail';

function App() {
  useEffect(() => {
    const body = document.body;
    body.style.width = "100vw";
    body.style.overflowX = "hidden";
  });
  return (
    <div className="App">
      <Header />
      <ItemDetail />
      <Footer />
    </div>
  );
}

export default App;
