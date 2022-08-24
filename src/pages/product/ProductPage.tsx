import React from 'react';
import { useParams } from 'react-router-dom';
import { Spin } from 'antd';
import styles from './ProductPage.module.css';
import { Footer, Header } from '../../components';

export const ProductPage = () => {
  const { productId } = useParams();

  // if (isLoading) {
  //   return (
  //     <div className={styles['spinner']}>
  //       <Spin size={'large'} />
  //     </div>
  //   );
  // }

  // if (error) {
  //   return <div className={styles['error']}>Error: {error}</div>;
  // }

  return (
    <>
      <Header />
      <div className={styles['page-content']}>
        {/* product intro and date picker */}
        <div className={styles['product-intro-contaitner']}></div>
        {/* anchor menu */}
        <div className={styles['product-anchor-menu']}></div>
        {/* product unique feature */}
        <div id="feature" className={styles['product-detail-container']}></div>
        {/* product fee */}
        <div id="fee" className={styles['product-detail-container']}></div>
        {/* booking insructions */}
        <div id="booking" className={styles['product-detail-container']}></div>
        {/* comments */}
        <div id="comments" className={styles['product-detail-container']}></div>
      </div>
      <Footer />
    </>
  );
};
