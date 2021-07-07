import './loginForm.scss';

import React, { useState } from 'react';
import LoginErrorMessage from './LoginErrorMessage/loginErrorMessage';
import { connect } from 'react-redux';
import IState from '../../../store/state';
import { appActions } from '../../../store/actions';
import { Redirect } from 'react-router';

const LoginForm: React.FC<any> = (props: any) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');
  const { isLoggedAdmin, setIsLoggedAdmin } = props;
  
  const clickLoginButton = (event: any) => {
    console.log(`Login: ${login} Password: ${password}`);
    // TODO: change to Admin / 12345
    if (login === '1' && password === '1') {
      setIsLoggedAdmin(true);
      setLoginMessage('');
      console.log('Admin logged in!');
    } else {
      setLoginMessage('Username or password incorrect');
      console.log(loginMessage);
    }

    event.preventDefault();
    // return false;
  }

  if (isLoggedAdmin) {
    console.log('Redirecting to list from login page...');
    return (
      <Redirect to='/list' />
    );
  }

  return (
    <div className="login-form__wrapper">
      <h2>Login page</h2>
      <form className="login-form" action="#" onSubmit={clickLoginButton} >
        <input type="text" id="login" placeholder="login" autoComplete="off" value={login} onChange={(e) => setLogin(e.target.value)} />
        <input type="password" id="password" placeholder="password" autoComplete="off" value={password} onChange={(e) => setPassword(e.target.value)}  />
        <LoginErrorMessage loginMessage={loginMessage} /> 
        <input type="submit" id="login-button" className="login-button" value="Login"  />
      </form>

    </div>
  );
}

const mapDispatchToProps = appActions;
const mapStateToProps = (state: IState) => ({
  isLoggedAdmin: state.isLoggedAdmin,
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

