import React, { useEffect } from 'react';
import styles from './HomePage.module.css';
import {
  Header,
  Footer,
  SideMenu,
  Carousel,
  ProductCollection,
  Cooperative,
} from '../../components';
import { Row, Col, Typography, Spin } from 'antd';
import hotSiderImg from '../../assets/images/sider_1.png';
import newSiderImg from '../../assets/images/sider_2.png';
import domesticSiderImg from '../../assets/images/sider_3.png';
import facebookImg from '../../assets/images/facebook.png';
import microsoftImg from '../../assets/images/microsoft.png';
import youtubeImg from '../../assets/images/youtube.png';
import instagramImg from '../../assets/images/instagram.png';
import { useTranslation } from 'react-i18next';
import { useSelector } from '../../state/hooks';
import { useDispatch } from 'react-redux';
import { fetchRCProductListActionCreator } from '../../state/reducers/recommendedProducts';

export const HomePage = () => {
  const [t] = useTranslation();

  const { productList, isLoading, error } = useSelector(
    (state) => state.recommendedProducts
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<any>(fetchRCProductListActionCreator());
  }, [dispatch]);

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
        {isLoading ? (
          <div className={styles['spinner']}>
            <Spin size={'large'} />
          </div>
        ) : error ? (
          <div className={styles['error']}>Error: {error}</div>
        ) : productList.length ? (
          <>
            <ProductCollection
              title={
                <Typography.Title type={'warning'} level={3}>
                  {t(`home_page.hot_recommended`)}
                </Typography.Title>
              }
              sideImage={hotSiderImg}
              products={productList[0].touristRoutes}
            />
            <ProductCollection
              title={
                <Typography.Title type={'danger'} level={3}>
                  {t(`home_page.new_arrival`)}
                </Typography.Title>
              }
              sideImage={newSiderImg}
              products={productList[1].touristRoutes}
            />
            <ProductCollection
              title={
                <Typography.Title type={'success'} level={3}>
                  {t(`home_page.domestic_travel`)}
                </Typography.Title>
              }
              sideImage={domesticSiderImg}
              products={productList[2].touristRoutes}
            />
          </>
        ) : null}
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
