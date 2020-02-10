import React from 'react';
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import Header from "./common/Header";
import PageNotFound from './PageNotFound';
import AboutPage from './about/AboutPage';
import BookPage from './Books/BookPage';
import './App.scss';

function App() {
  console.log('TEst')
  return (
    <>
     <Header />
      <div className="container-fluid mt-4">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/books" component={BookPage} />
          <Route path="/about" component={AboutPage} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </>
  );
}

export default App;
