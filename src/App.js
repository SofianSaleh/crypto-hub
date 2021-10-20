import React from 'react';
import './App.css';
import { Switch, Link, Route } from 'react-router-dom';
import { Layout, Typography, space } from 'antd';

import {
  Navbar,
  Exchanges,
  News,
  Cryptocurrencies,
  CryptoDetails,
  Homepage,
} from './components';

function app() {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Switch>
              <Route exact path='/'>
                <Homepage />
              </Route>
              <Route exact path='/exchanges'>
                <Exchanges />
              </Route>
              <Route exact path='/cryptocurrencies'>
                <Cryptocurrencies />
              </Route>
              <Route exact path='/crypto/:coinId'>
                <CryptoDetails />
              </Route>
              <Route exact path='/news'>
                <News />
              </Route>
            </Switch>
          </div>
        </Layout>
      </div>
      <div className='footer'></div>
    </div>
  );
}

export default app;
