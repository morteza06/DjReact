import React from 'react';
import { Routes } from 'react-router-dom';

import ArticleList from './containers/ArticleListView';
import ArticleDetail from './containers/ArticleDetailView';

const BaseRouter = () => (
    <div>
        <Routes exact path='/' component={ArticleList}  />
        <Routes exact path='/:articleID' component={ArticleDetail}  />
    </div>
);

export default BaseRouter;