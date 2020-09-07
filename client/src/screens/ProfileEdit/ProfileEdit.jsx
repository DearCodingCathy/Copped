import React, { Component } from 'react'
import { readOneUser, updateUser } from '../../services/users'

export default class ProfileEdit extends Component {
constructor() {
  super()
  this.state = {
  user: {
    imgUrl: '',
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    bio: ''
    }
  }
}

  componentDidMount() {
    const userId = this.props.currentUser;
    this.fetchOneUser(userId)
  }

fetchOneUser = async (user_id) => {
const user = await readOneUser(user_id)
  this.setState({
    user: {
    imgUrl: user.img_url,
    username: user.username,
    firstName: user.first_name,
    lastName: user.last_name,
    email: user.email,
    bio: user.bio
    }
  })
}


  // handleUserUpdate = async (user_id,data) => {
  //   const newUser = await updateUser(user_id, data);
  //   this.setState(prevState => ({
  //     user: prevState.posts.map(post => post.id === parseInt(id) ? newPost : post)
  //   }))
  // }


    handleChange = async (e) => {
    const { name, value } = e.target;
      this.setState({
      ...this.state.user,
      [name]: value
      })
    }
  
  handleSubmit = async (e) => {
    e.preventDefault()
    const { imgUrl, username, firstName, lastName, email, bio } = this.state;
    const updatedInfo = { img_url: imgUrl, username: username, first_name: firstName, last_name: lastName, email: email, bio: bio }
    const userData = await updateUser(this.props.currentUser.id, updatedInfo)
    this.props.history.push(`/user/${this.props.currentUser.username}`)
  }
  
  render() {
    return (
      <div>

        <form>

        <label> Profile Image: </label>
          <input
        type='text'
        value={this.state.imgUrl}
        name=''
        onChange={this.handleChange}
        />

        <label> Username: </label>
        <input
        type='text'
        value={this.state.username}
        name=''
        onChange={this.handleChange}
        />

        <label> First Name: </label>
        <input
        type='text'
        value={this.state.firstName}
        name=''
        onChange={this.handleChange}
        />

        <label> Last Name: </label>
        <input
        type='text'
        value={this.state.lastName}
        name=''
        onChange={this.handleChange}
        />

        <label> Bio: </label>
        <input
        type='text'
        value={this.state.bio}
        name=''
        onChange={this.handleChange}
        />

        {/* <label> </label>
        <input
        type='text'
        value={}
        name=''
        onChange={this.handleChange}
        /> */}

        </form>
      </div>
    )
  }
}
