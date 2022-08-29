import React from 'react';
import styles from './App.module.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  // HomePage,
  // ProductPage,
  // FilteredProductsPage,
  // SignInPage,
  // SignUpPage,
  NotFoundPage,
} from './pages';
import { MainLayout, SignInUpLayout } from './layout';
import { FilteredProducts, Home, Product, SignIn, SignUp } from './components';

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="products/:productId" element={<Product />} />
            <Route path="products/filter" element={<FilteredProducts />} />
            <Route
              path="products/filter/:keywords"
              element={<FilteredProducts />}
            />
          </Route>
          <Route path="/sign" element={<SignInUpLayout />}>
            <Route path="signIn" element={<SignIn />} />
            <Route path="signUp" element={<SignUp />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
