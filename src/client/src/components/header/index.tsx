import React from 'react';
import { Layout, Menu } from 'antd';
const { Header } = Layout;

interface AppHeaderProps {
  theme: 'dark' | 'light';
}

const AppHeader: React.FC<AppHeaderProps> = ({ theme }: AppHeaderProps) => (
  <Header className='header'>
    <div className='logo' />
    <Menu theme={theme} mode='horizontal' />
  </Header>
);

export default AppHeader;
