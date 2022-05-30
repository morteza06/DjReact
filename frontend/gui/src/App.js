
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import BaseRouter from './routes';
import './App.css';
import 'antd/dist/antd.min.css'; 

import CustomLayout from './containers/Layout';

 
class App extends Component {
  render(){
    return (
        <BrowserRouter>
          <CustomLayout>
              <BaseRouter />
          </CustomLayout>
        </BrowserRouter>
    );
  }
}

export default App;
