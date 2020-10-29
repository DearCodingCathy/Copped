import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './UserLogin.css'

export default class UserLogin extends Component {

  state = {
    username: '',
    password: ''
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
}

render() {
const { username, password } = this.state;
const { handleLogin, history } = this.props;

return (
<main className='login-main'>
  <div className='base-container'>
    <div className='card p-4 align-items-center mt-4 mb-5'>
    <div className='login-header'>Login</div>
    <div className='content'>
<div className='l-image mx-3 align-self-center'>
  <img className='login-img' src="https://i.imgur.com/jPhLW1W.jpg" alt='children sneakers' />
</div>
<div className='form'>
  <div className="form-group">
    <label className='login-label'>
      Username:
        </label>
    <input
      className='input-contain'
      placeholder='Username'
      value={username}
      name='username'
      type='text'
      required
      autoFocus
      onChange={this.handleChange}
    />
  </div>
      
  <div className='form-group'>
    <label className='login-label'>
      Password:
        </label>
    <input
      className='input-contain'
      placeholder='Password'
      type='password'
      value={password}
      name='password'
      required
      autoFocus
      onChange={this.handleChange}
    />
  </div>
  </div>
  <div className='right-side'>

  <Link to='/register' className='align-self-center text-light'> Register</Link>
  </div>
  </div>

<div className='footer'>
  <button className='btn' onClick={(e) => {
    e.preventDefault();
    if (username === '' || password === '') {
      alert('Please enter your Username and Password')
    } else {
      handleLogin(this.state);
      history.push(`/user/${username}`)
    }
  }}>
    Login</button>

</div>
  </div>
    </div>

</main>
);
  }
}
