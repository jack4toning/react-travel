import React from 'react';
import styles from './HomePage.module.css';
import {
  Header,
  Footer,
  SideMenu,
  Carousel,
  ProductCollection,
  Cooperative,
} from '../../components';
import { Row, Col, Typography } from 'antd';
import {
  productList1 as hotProducts,
  productList2 as newProducts,
  productList3 as domesticProducts,
} from './mockup';
import hotSiderImg from '../../assets/images/sider_1.png';
import newSiderImg from '../../assets/images/sider_2.png';
import domesticSiderImg from '../../assets/images/sider_3.png';
import facebookImg from '../../assets/images/facebook.png';
import microsoftImg from '../../assets/images/microsoft.png';
import youtubeImg from '../../assets/images/youtube.png';
import instagramImg from '../../assets/images/instagram.png';
import { useTranslation } from 'react-i18next';

export const HomePage = () => {
  const [t] = useTranslation();

  return (
    <>
      <Header />
      <div className={styles['page-content']}>
        <Row style={{ marginTop: 20 }}>
          <Col span={6}>
            <SideMenu />
          </Col>
          <Col span={18}>
            <Carousel />
          </Col>
        </Row>
        <ProductCollection
          title={
            <Typography.Title type={'warning'} level={3}>
              {t(`home_page.hot_recommended`)}
            </Typography.Title>
          }
          sideImage={hotSiderImg}
          products={hotProducts}
        />
        <ProductCollection
          title={
            <Typography.Title type={'danger'} level={3}>
              {t(`home_page.new_arrival`)}
            </Typography.Title>
          }
          sideImage={newSiderImg}
          products={newProducts}
        />
        <ProductCollection
          title={
            <Typography.Title type={'success'} level={3}>
              {t(`home_page.domestic_travel`)}
            </Typography.Title>
          }
          sideImage={domesticSiderImg}
          products={domesticProducts}
        />
        <Cooperative
          title={
            <Typography.Title type={'secondary'} level={3}>
              {t(`home_page.cooperative`)}
            </Typography.Title>
          }
          coopImages={[facebookImg, microsoftImg, youtubeImg, instagramImg]}
        />
      </div>
      <Footer />
    </>
  );
};
