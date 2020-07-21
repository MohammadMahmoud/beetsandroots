import React from 'react';
import { Layout } from 'antd';
const { Footer } = Layout;

const AppFooter: React.FC = () => (
  <Footer style={{ textAlign: 'center' }}>
    Made By <a href='https://mdiamantes.com/'>Mohammed Mahmoud</a> © 2020. All
    rights reserved.
  </Footer>
);

export default AppFooter;
