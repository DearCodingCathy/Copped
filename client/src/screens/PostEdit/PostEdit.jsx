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
    this.props.fetchOnePosts(this.props.currentUser.id, this.props.match.params.id);
    this.setFormData()
  }



  setFormData = () => {
    
    this.setState({
      title: this.props.post.title,
      img_url: this.props.post.img_url,
      content: this.props.post.content,
      location: this.props.post.location
    })
}

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
      })
  }


  render() {
    const { currentUser, handlePostUpdate, history } = this.props
    // const currentPost = this.props.posts.find(post => post.id === parseInt(this.props.match.params.id))
    // console.log(currentPost)

    // if (currentPost) {
    return (
      <div>
        <h2 className=''>Edit Post</h2>

        <img className='mt-4' src={this.props.post.img_url} alt={this.props.post.title} />


        <form className='mb-5'
          onSubmit={(e) => {
            e.preventDefault();
            handlePostUpdate(currentUser.id, this.props.post.id, this.state);
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
          <button>Update Post</button>
    </form>
        
      </div>
    )
    // } else {
    //   return <h1>...Loading</h1>
    // }
  }
}
