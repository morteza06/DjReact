import React from 'react';
import { Route, Routes } from 'react-router-dom';

import ArticleList from './containers/ArticleListView';
import ArticleDetail from './containers/ArticleDetailView';

const BaseRouter = () => (
    <div>
        <Routes>
            <Route exact path='/'  element={<ArticleList />}  />
            <Route exact path='/:articleID'  element={< ArticleDetail />}  />
        </Routes>
    </div>
);

export default BaseRouter;