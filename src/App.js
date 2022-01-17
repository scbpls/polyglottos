import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Info from './components/Info';
import Shop from './components/Shop';
import Basket from './components/Basket';
import Contact from './components/Contact';
import Login from './components/Login';
import UserPanel from './components/UserPanel';
import Register from './components/Register';
import NoPage from './components/NoPage';
import { users } from './utils/users';
import { quotes } from './utils/quotes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home {...quotes} />} />
          <Route path="info" element={<Info />} />
          <Route path="shop" element={<Shop />} />
          <Route path="basket" element={<Basket />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login {...users} />} />
          <Route path="user-panel" element={<UserPanel />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
