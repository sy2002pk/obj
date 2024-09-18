import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import logo from '../../assets/images/Pray.png'
import './header.css';

const HeaderComponent = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleMenu = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <NavLink to={'/'}>
            <img src={logo} alt="" />
          </NavLink>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </div>
        <ul className={`nav-links ${collapsed ? '' : 'collapsed'}`}>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to={'/religion'}>Religion</NavLink></li>
          <li><NavLink to={'/charityFund'}>Charity Fund</NavLink></li>
          <li><NavLink to={'/events'}>Events</NavLink></li>
          <li><NavLink to={'/contact'}>Contact</NavLink></li>
          <li><NavLink to={'/language'}>Language</NavLink></li>
          <div className="login-btn">
            <NavLink to={'/login'}>Login</NavLink>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default HeaderComponent;
