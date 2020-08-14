import React, { Component } from 'react'
import './PostEdit.css'

export default class PostEdit extends Component {
  state = {
      title: '',
      img_url: '',
      content: '',
      location: ''
    
  }

  componentDidMount() {
    // { fetchPosts }  this.props
    this.props.fetchPosts(this.props.currentUser.id)
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
      })
  }


  render() {
    const { currentUser, handlePostUpdate } = this.props
    const currentPost = this.props.posts.find(post => post.id === parseInt(this.props.match.params.id))
    // console.log(currentPost)

    if (currentPost) {
    return (
      <div>
        <h2 classname=''>Edit Post</h2>

        <img className='mt-4' src={currentPost.img_url} alt={currentPost.title} />


        <form className='mb-5'>
          
          <div className='d-flex flex-column m-3'>
          <label>Update Post Image:</label>

          <input
            type='text'
              value={this.state.img_url}
              placeholder={currentPost.img_url}
            name='img_url'
            onChange={this.handleChange}
            />
          </div>

          {/* <h2>{currentPost.title}</h2> */}
          <div className='d-flex flex-column m-3'>
          <label>Title:</label>

          <input
            type='text'
              value={this.state.title}
              placeholder={currentPost.title}
            name='title'
            onChange={this.handleChange}
            />
            
          </div>


          {/* <p>{currentPost.content}</p> */}
          <div className='d-flex flex-column m-3 '>
          <label>Content:</label>

            <textarea
              className='content-input'
            type='text'
              value={this.state.content}
              placeholder={currentPost.content}
            name='content'
            onChange={this.handleChange}
            />
          </div>

          <div className='d-flex flex-column m-3 mb-5'>

          <label>Location:</label>
          <input
            type='text'
              value={this.state.location}
            placeholder={currentPost.location}
            name='location'
            onChange={this.handleChange}
            />
            </div>
          <button>Update Post</button>
    </form>
        
      </div>
    )
    } else {
      return <h1>...Loading</h1>
    }
  }
}
