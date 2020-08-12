import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './UserRegister.css'

export default class UserRegister extends Component {

  state = {
    user: {
      first_name: '',
      last_name: '',
      email: '',
      username: '',
      password: ''
    }
    
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const { first_name, last_name, email, username, password } = this.state;
    const { handleRegister, history } = this.props;

    return (
      <main className='register-main'>
      <div className='base-container'>
        <div className='card p-4 align-items-center mt-3 mb-5'>
        <div className='header'>Register</div>
          <div className='content'>
            <div className='r-image align-self-center'>
              {/* <img className='login-img ' src="https://www.clipartmax.com/png/small/438-4380277_shoe-shoes-shoeboxes-nike-adidas-jordans-boxes-box-cartoon-nike-shoe-box.png" alt="Shoe Shoes Shoeboxes Nike Adidas Jordans Boxes Box - Cartoon Nike Shoe Box @clipartmax.com" /> */}
            </div>
            <div className='form mx-5'>
              <div className='form-group'>                
                <label className='r-label'>
                  First Name:
                  </label>
                  <input
                    className='r-input-contain'
                    placeholder='First name'
                    value={first_name}
                    name='first_name'
                    required
                    autoFocus
                    onChange={this.handleChange}
                />
                </div>
                
              <div className='form-group'>   
                  <label className='r-label'>
                  Last Name:
                  </label >
                  <input
                    className='r-input-contain'
                    placeholder='Last name'
                    value={last_name}
                    name='last_name'
                    required
                    autoFocus
                    onChange={this.handleChange}
                  />
                </div>

              <div className='form-group'>
                <label className='r-label'>
                  Email:
                  </label>
                <input
                  className='r-input-contain'
                  placeholder='Email'
                  value={email}
                  name='email'
                  required
                  autoFocus
                  onChange={this.handleChange}
                />
              </div>

              <div className='form-group'>   
                <label className='r-label'>
                  Username:
                  </label>
                <input
                  className='r-input-contain'
                    placeholder='Username'
                    value={username}
                    name='username'
                    required
                    autoFocus
                    onChange={this.handleChange}
                  />
                </div>

              <div className='form-group'>   
                <label className='r-label'>
                  Password:
                  </label>
                <input
                  className='r-input-contain'
                    placeholder='Password'
                    value={password}
                    name='Password'
                    required
                    autoFocus
                    onChange={this.handleChange}
                  />
                </div>

                <div className='footer'>
                  <button className='btn' onClick={(e) => {
                    e.preventDefault();
                    handleRegister(this.state);
                  }}>
                    Register</button>
              </div>
            </div>
            <div className='left-side'>
              <Link to='/' className='align-self-center text-light'> Login</Link>
            </div>

        </div>
      </div>
    </div>
      </main>
    )
  }
}


