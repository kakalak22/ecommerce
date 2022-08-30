import './App.scss';
import React from 'react';

import Header from './SitePart/Header';
import Home from './SitePart/Home';
import Footer from './component/Footer/Footer';
import { Routes, Route } from 'react-router-dom';

import { useEffect } from 'react';
import Modal from './component/Modal/Modal';
import Cart from './component/Cart/Cart';
import ItemDetailPage from './SitePart/ItemDetailPage';
import ItemsPage from './SitePart/ItemsPage';
import { useStore } from "./store"


function App() {
  const [state, dispatch] = useStore();
  const { isModalOpen, singleItem } = state;

  useEffect(() => {
    const body = document.body;
    body.style.width = "100vw";
    body.style.overflowX = "hidden";
  });

  return (
    <React.Fragment>
      <div className="App">
        {isModalOpen && <Modal singleItem={singleItem} />}
        <Cart />
        <Header />
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
          </Route>
          <Route path='/products' >
            <Route index element={<ItemsPage />} />
            <Route path=":productId" element={<ItemDetailPage />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
