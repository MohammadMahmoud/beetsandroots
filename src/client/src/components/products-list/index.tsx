import React from 'react';
import Product, { ProductProps } from '../product';
import { List } from 'antd';
import './style.css';

interface ProductListProps {
  productList: ProductProps[];
}

const ProductList: React.FC<ProductListProps> = ({
  productList,
}: ProductListProps) => (
  <List
    className='product-list'
    itemLayout='vertical'
    size='large'
    pagination={{
      pageSize: 5,
    }}
    dataSource={productList}
    renderItem={(item: ProductProps) => <Product {...item} />}
  />
);
export default ProductList;
