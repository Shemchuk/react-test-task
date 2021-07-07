import './app.scss';
// import '../css/owfont-regular.scss'

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter, useParams, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import IState from '../store/state';
import { appActions } from '../store/actions';
import Header from './Header/header';
import Footer from './Footer/footer';
import LoginForm from './LoginPage/LoginForm/loginForm';
import LoginPage from './LoginPage/loginPage';
import ListPage from './ListPage/listPage';

const App: React.FC<any> = (props: any) => {
  // const { language, setLang } = props;
  // const { lang }: any = useParams();

  // useEffect(() => {
  //   if (language !== lang) {
  //     setLang(lang);
  //   }
  // }, [setLang, lang, language]);

  return (

    <>
      <Header />
      <Router>
        <Switch>
          <Route path={`/list`}>
            <ListPage />
          </Route>
          <Route path={`/post/:id`}>
            <LoginPage />
          </Route>
          <Route path={`/`}>
            <LoginPage />
          </Route>
        </Switch>
      </Router>
    <Footer />
    </>
  );
};

// const mapDispatchToProps = appActions;
// const mapStateToProps = (state: IState) => ({
//   language: state.language,
// });
// const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(AppComponent));

// const LocalizedApp: React.FC<any> = () => (
//   <Router>
//     <Switch>
//       <Route path="/:lang">
//         <App />
//       </Route>
//       <Redirect to="/ru" />
//     </Switch>
//   </Router>
// );

export default App;
