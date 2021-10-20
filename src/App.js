import React from 'react';
import { Switch, Link, Route } from 'react-router-dom';
import { Layout, Typography, space } from 'antd';

import { Navbar } from './components';
A;
import './App.css';

function app() {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'></div>
      <div className='footer'></div>
    </div>
  );
}

export default app;
