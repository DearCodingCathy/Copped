import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { loginUser, registerUser, removeToken, verifyUser } from './services/auth'
import Main from './components/Main/Main'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'

import { withRouter } from 'react-router-dom'




class App extends Component {
  state = {
  currentUser: null
  }

  componentDidMount() {
    this.handleVerify();
  }
  
  handleLogin = async (userData) => {
    const currentUser = await loginUser(userData);
    this.setState({ currentUser })
  }

  handleRegister = async (userData) => {
    const currentUser = await registerUser(userData);
    this.setState({ currentUser })
  }

  handleLogout = () => {
    this.setState({
      currentUser: null
    })
    localStorage.removeItem('authToken');
    removeToken();
    this.props.history.push('/')
  }

  handleVerify = async () => {
    const currentUser = await verifyUser();
    this.setState({ currentUser });
  }

  render() {
  return (
    <div>

      <Main
        currentUser={this.state.currentUser}
        handleLogin={this.handleLogin}
        handleRegister={this.handleRegister}
      />
      <Header
        currentUser={this.state.currentUser}
      />
      <Nav 
      currentUser={this.state.currentUser}
      handleLogout={this.handleLogout}
      />
    </div>
    );
  }
}

export default withRouter(App);
