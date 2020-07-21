import React, { useState, useEffect } from 'react';
import Header from '../header';
import ProductList from '../products-list';
import { ProductProps } from '../product';
import Footer from '../footer';
import { Layout, Menu, Input } from 'antd';
import {
  TabletOutlined,
  AppleOutlined,
  AndroidOutlined,
  SearchOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons';
import './layout.css';

const AppLayout: React.FC = () => {
  const [originalProducts, setOriginalProducts] = useState<ProductProps[]>([]);
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductProps[]>([]);
  const [productsCategories, setProductsCategories] = useState<string[]>([]);
  const [searchValue, setSearchValue] = useState<string>();
  const { SubMenu } = Menu;
  const { Content, Sider } = Layout;
  const { Search } = Input;

  useEffect(() => {
    fetch('http://localhost:3001/api/product')
      .then((res) => res.json())
      .then((json) => {
        setOriginalProducts(json.message.devices);
        setProducts(json.message.devices);
        setFilteredProducts(json.message.devices);
        setProductsCategories(json.message.devicesBrands);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSearch = (value: string) => {
    setSearchValue(value);
    if (!value) {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) =>
          product.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())
        )
      );
    }
  };

  const handleBrandFilter = (brand: string) => {
    setSearchValue('');
    if (brand === 'All') {
      setFilteredProducts(originalProducts);
      setProducts(originalProducts);
    } else {
      setFilteredProducts(
        originalProducts.filter((product) => product.brand === brand)
      );
      setProducts(
        originalProducts.filter((product) => product.brand === brand)
      );
    }
  };

  return (
    <Layout>
      <Header theme='light' />
      <Content style={{ padding: '0 50px', margin: '16px 0' }}>
        <Layout
          className='site-layout-background'
          style={{ padding: '24px 0' }}
        >
          <Sider className='site-layout-background' width={200}>
            <Menu
              mode='inline'
              defaultSelectedKeys={['0']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%' }}
            >
              <SubMenu key='sub1' icon={<TabletOutlined />} title='Brands'>
                <Menu.Item key='0' onClick={() => handleBrandFilter('All')}>
                  <UnorderedListOutlined />
                  All
                </Menu.Item>
                {productsCategories.map((category, key) => (
                  <Menu.Item
                    key={key + 1}
                    onClick={() => handleBrandFilter(category)}
                  >
                    {category === 'Apple' ? (
                      <AppleOutlined />
                    ) : (
                      <AndroidOutlined />
                    )}
                    {category}
                  </Menu.Item>
                ))}
              </SubMenu>
            </Menu>
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
            <Search
              value={searchValue}
              placeholder='Search Product'
              enterButton={<SearchOutlined />}
              size='large'
              onChange={(e) => handleSearch(e.target.value)}
            />
            <ProductList productList={filteredProducts} />
          </Content>
        </Layout>
        <Footer />
      </Content>
    </Layout>
  );
};

export default AppLayout;
