import React, { Component } from 'react'

export default class CreatePost extends Component {

  state = {
    img_url: '',
    title: '',
    content: '',
    location: ''
  }


  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const { currentUser, handlePostCreate, history } = this.props

    return (
      <div>
        <h2>Create Post</h2>

        <div className='d-flex justify-content-center'>

          <img className='mt-4 mx-auto' src={this.state.img_url} alt={this.state.title} />


        </div>



        <form className='mb-5'
          onSubmit={(e) => {
            e.preventDefault();
            handlePostCreate(currentUser.id, this.state);
            history.push(`/user/${currentUser.username}`)
          }

          }
        >

          <div className='d-flex flex-column m-3'>
            <label>Update Post Image:</label>

            <input
              type='text'
              value={this.state.img_url}
              name='img_url'
              onChange={this.handleChange}
            />
          </div>




          <div className='d-flex flex-column m-3 '>
            
            <label>Title:</label>
            <input
              type='text'
              value={this.state.title}
              name='title'
              onChange={this.handleChange}
            />
            
            
            
            
            <label>Content:</label>
            <textarea
              className='content-input'
              type='text'
              value={this.state.content}
              name='content'
              onChange={this.handleChange}
            />
          </div>

          <div className='d-flex flex-column m-3 mb-5'>

            <label>Location:</label>
            <input
              type='text'
              value={this.state.location}
              name='location'
              onChange={this.handleChange}
            />
          </div>
          <button>Create Post</button>
        </form>

      </div>
    )
  }
}
