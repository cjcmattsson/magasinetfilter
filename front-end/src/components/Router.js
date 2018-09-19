import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App/App';
import Article from './Article/Article';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/article/:articleId" component={Article} />
    </Switch>
  </BrowserRouter>
)

export default Router;
