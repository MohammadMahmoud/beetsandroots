import React, { useState } from 'react';
import { List, Row, Col, Button, Rate, Modal } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

export interface ProductProps {
  productImageUrl: string;
  brand: string;
  title: string;
  brandImageUrl: string;
  price: number;
  rated: number;
  specifications: {
    display: string;
    resultion: string;
    os: string;
    processor: string;
    camera: string;
  };
}

const Product: React.FC<ProductProps> = ({
  productImageUrl,
  title,
  brandImageUrl,
  price,
  rated,
  specifications,
}: ProductProps) => {
  const [rate, setRate] = useState<number>(rated);
  const handleAddToCart = (item: string) => {
    const secondsToGo = 3;
    const modal = Modal.success({
      title: 'Item added to cart',
      content: `${item} has been added to cart.`,
    });
    setTimeout(() => {
      modal.destroy();
    }, secondsToGo * 1000);
  };
  return (
    <List.Item>
      <Row>
        <Col className='col' xs={24} md={3}>
          <img style={{ width: '10vw' }} src={productImageUrl} alt={title} />
          <Rate
            className='col'
            value={rate}
            onChange={(value) => setRate(value)}
          />
        </Col>
        <Col xs={24} md={18}>
          <img style={{ width: '100px' }} src={brandImageUrl} alt={title} />
          <p>{title}</p>
          <ul>
            <li>
              <b>Display</b> {specifications.display}
            </li>
            <li>
              <b>Display Resultion</b> {specifications.resultion}
            </li>
            <li>
              <b>OS</b> {specifications.os}
            </li>
            <li>
              <b>Processor</b> {specifications.processor}
            </li>
            <li>
              <b>Camera</b> {specifications.camera}
            </li>
          </ul>
        </Col>
        <Col className='col' xs={24} md={3}>
          <h3 className='price'>€ {price}</h3>
          <p style={{ textAlign: 'center' }}>
            Including VAT <br /> Free Delivery
          </p>
          <Button
            onClick={() => handleAddToCart(title)}
            type='primary'
            icon={<ShoppingCartOutlined />}
          >
            Add to cart
          </Button>
        </Col>
      </Row>
    </List.Item>
  );
};

export default Product;
