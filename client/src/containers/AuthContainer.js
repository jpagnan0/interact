import React, { Component } from 'react';
import SignUpForm from '../components/SignUpForm';
import LoginForm from '../components/LoginForm';
class AuthContainer extends Component {


  constructor(props) {
    super(props);

    this.state = {
      name: ''
      username: '',
      password: '',
      confirmPassword: '',
      token: '',
      loggedIn: false,
    };
  }

  render() {
    return (
      <SignUpForm />
      <LoginForm />
    );
  }

}

export default AuthContainer;
