import React from 'react';
import styles from './ProductCollection.module.css';
import { Row, Col, Divider } from 'antd';
import { ProductOverview } from '../../components';

interface PropsType {
  title: JSX.Element;
  sideImage: string;
  products: any[];
}

export const ProductCollection: React.FC<PropsType> = ({
  title,
  sideImage,
  products,
}) => {
  return (
    <div className={styles.content}>
      <Divider orientation='left'>{title}</Divider>
      <Row>
        <Col span={4}>
          <img src={sideImage} className={styles['side-image']} alt='' />
        </Col>
        <Col span={20}>
          <Row>
            <Col span={12}>
              <ProductOverview
                size={'large'}
                id={products[0].id}
                title={products[0].title}
                imageSrc={products[0].touristRoutePictures[0].url}
                price={products[0].price}
              />
              <ProductOverview
                size={'large'}
                id={products[1].id}
                title={products[1].title}
                imageSrc={products[1].touristRoutePictures[0].url}
                price={products[1].price}
              />
            </Col>
            <Col span={12}>
              <ProductOverview
                size={'large'}
                id={products[3].id}
                title={products[3].title}
                imageSrc={products[3].touristRoutePictures[0].url}
                price={products[3].price}
              />
              <ProductOverview
                size={'large'}
                id={products[4].id}
                title={products[4].title}
                imageSrc={products[4].touristRoutePictures[0].url}
                price={products[4].price}
              />
            </Col>
          </Row>
          <Row>
            <Col span={6}>
              <ProductOverview
                size={'small'}
                id={products[5].id}
                title={products[5].title}
                imageSrc={products[5].touristRoutePictures[0].url}
                price={products[5].price}
              />
            </Col>
            <Col span={6}>
              <ProductOverview
                size={'small'}
                id={products[6].id}
                title={products[6].title}
                imageSrc={products[6].touristRoutePictures[0].url}
                price={products[6].price}
              />
            </Col>
            <Col span={6}>
              <ProductOverview
                size={'small'}
                id={products[7].id}
                title={products[7].title}
                imageSrc={products[7].touristRoutePictures[0].url}
                price={products[7].price}
              />
            </Col>
            <Col span={6}>
              <ProductOverview
                size={'small'}
                id={products[8].id}
                title={products[8].title}
                imageSrc={products[8].touristRoutePictures[0].url}
                price={products[8].price}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
