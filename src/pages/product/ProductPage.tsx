import React from 'react';
import { useParams } from 'react-router-dom';
// import styles from './ProductPage.module.css';

export const ProductPage = () => {
  const params = useParams();
  return (
    <div>
      <span>product {params.productId}</span>
    </div>
  );
};
