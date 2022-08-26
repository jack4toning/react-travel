import React from 'react';
import styles from './App.module.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  GlobalLayoutPage,
  Home,
  NotFound,
  LoginPage,
  RegisterPage,
  Product,
} from './pages';

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GlobalLayoutPage />}>
            <Route index element={<Home />} />
            <Route path="products/:productId" element={<Product />} />
          </Route>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
