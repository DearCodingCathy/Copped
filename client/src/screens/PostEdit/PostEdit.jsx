import React, { Component } from 'react'
import './PostEdit.css'
import {readOnePost} from '../../services/posts'

export default class PostEdit extends Component {
  state = {
      title: '',
      img_url: '',
      content: '',
      location: ''
    
  }

  componentDidMount() {
    this.fetchOnePosts(this.props.currentUser.id, this.props.match.params.id);
  }

  fetchOnePosts = async (user_id, id) => {
    const post = await readOnePost(user_id, id)
    this.setState({
      title: post.title,
      img_url: post.img_url,
      content: post.content,
      location: post.location
    })
  }

//   setFormData = () => {
    
//     this.setState({
//       title: this.props.post.title,
//       img_url: this.props.post.img_url,
//       content: this.props.post.content,
//       location: this.props.post.location
//     })
// }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
      })
  }


  render() {
    const { currentUser, handlePostUpdate, history } = this.props

    return (
      <div>
        <h2 className=''>Edit Post</h2>

        <div className='d-flex justify-content-center'>


        

        <img className='mt-4 create-img' src={this.state.img_url} alt={this.state.title} />
        </div>

        <form className='mb-5'
          onSubmit={(e) => {
            e.preventDefault();
            handlePostUpdate(currentUser.id, this.props.match.params.id, this.state);
            history.push(`/user/${currentUser.id}`)
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

            <label>Update Title:</label>

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
          <button>Update Post</button>
    </form>
        
      </div>
    )
  }
}
