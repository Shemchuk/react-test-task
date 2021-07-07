import './app.scss';

import Header from './Header/header';
import Footer from './Footer/footer';
import LoginPage from './LoginPage/loginPage';
import ListPage from './ListPage/listPage';
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

const App: React.FC<any> = (props: any) => {

  return (
    <>
      <Header />
        <Router>
          <Switch>
            <Route path={`/post/:id`}>
              <LoginPage />
            </Route>
            <Route path={`/login`}>
              <LoginPage />
            </Route>
            <Route path={`/list`}>
              <ListPage />
            </Route>
            <Redirect to='/login' />
          </Switch>
        </Router>
      <Footer />
    </>
  );
};

export default App;
