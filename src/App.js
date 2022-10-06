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
import { actions, useStore } from "./store"
import Dropdown from './component/Dropdown/Dropdown';
import Checkout from './component/CheckOut';
import Create from './component/User/Create/Create';
import Login from './component/User/Login/Login';
import { useState } from 'react';
import { auth } from './firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
import User from './component/User';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from './common/ProtectedRoute';


function App() {
  const [state, dispatch] = useStore();
  const [userId, setUserId] = useState();
  const { isModalOpen, singleItem, location, isDropdownOpen, sideName } = state;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId({ email: user.email, displayName: user.displayName });
      } else {
        setUserId({ email: "", displayName: "" });
      }
    });
  }, [])

  useEffect(() => {
    const body = document.body;
    body.style.width = "100vw";
    body.style.overflowX = "hidden";
    dispatch(actions.getUserId(userId));
  }, [userId]);

  return (
    <React.Fragment>
      <Dropdown
        isDropdownOpen={isDropdownOpen}
        location={location}
        name={sideName}
        nameOfClass={"sidename"}
      />
      <div className="App">
        {isModalOpen && <Modal singleItem={singleItem} />}
        <Cart />
        <Header />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
          </Route>
          <Route path='/products' >
            <Route index element={<ItemsPage />} />
            <Route path=":productId" element={<ItemDetailPage />} />
          </Route>
          <Route path='/checkout'>
            <Route index element={<Checkout />} />
          </Route>
          <Route path='/user'>
            <Route index element={<ProtectedRoute><User /></ProtectedRoute>} />
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Create />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
