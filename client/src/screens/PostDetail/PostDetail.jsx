import React from 'react'
import './PostDetail.css'
import {Link} from 'react-router-dom'
import { Component } from 'react'
import { Dropdown } from 'react-bootstrap'
import { BsFillGearFill } from 'react-icons/bs'
import { getAllPost } from '../../services/posts'
import { createComment } from '../../services/comments'
// import {readAllPost} from '../../services/posts'

import SweetAlert from 'react-bootstrap-sweetalert';



export default class PostDetail extends Component {
  state = {
    posts: [],
    date: '',
    content: ''
}



  componentDidMount() {
    this.props.fetchComments(this.props.currentUser.id, this.props.match.params.id)
    this.fetchAllPosts()
    
    this.setState({
      date: new Date(this.props.currentUser.created_at).toDateString()
    })

  }

  fetchAllPosts = async () => {
    const posts = await getAllPost()
    this.setState({ posts });
  }

  handleCommentCreate = async (user_id, post_id, data) => {
    const newComment = await createComment(user_id, post_id, data);
    this.setState(prevState => ({
      comment: [...prevState.comments, newComment]
    }))
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const { currentUser, handleCommentCreate, handlePostDelete, history } = this.props

    const prod = this.state.posts.find(post => post.id === parseInt(this.props.match.params.id))

    if (prod) {
      return (

        <div className='d-flex flex-row'>
          <div className='container border d-flex flex-column justify-items-center mb-5'>
            <img className='prod-img align-self-center mt-5' src={prod.img_url} alt={prod.title} />
            
            <div className='d-flex flex-row justify-content-center'>
            
            <h2 className='m-4'>{prod.title}</h2>

              <div className='mt-3'>
                
            <Dropdown className='mr-5'>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                    <BsFillGearFill />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                    <Link to={`/editpost/${prod.id}`}>Edit Post</Link>
                    

                    


                    <button
                      onClick={() =>
                        this.props.handlePostDelete(this.props.currentUser.id, this.props.match.params.id)}
                    
                      className='text-danger'>
                      Delete Post
                      </button>
              </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
            
            <hr />

            <div className=''>
              

            <div className='d-flex ml-4 mb-5'>
              <div className='mr-3'>
                  {/* <Link to={`/user/${prod.user.username}`}><img className='rounded-circle user-img' src={prod.user.img_url} alt={prod.user.username} /></Link> */}
              </div>
              <div className='d-flex flex-column'>
                {/* <small>Written By:</small> */}
                {/* <small>{prod.user.first_name} {prod.user.last_name}</small> */}
                <small>{prod.location}</small>
                <small>Posted: {this.state.date}</small>
              </div>
            </div>

            <div className='mt-5 text-container ml-5 '>
              <p>{prod.content}</p>
            </div>
          </div>
          </div>
          

          <div className='comments-container border '>
            <h2 className='m-5'>Comments</h2>
            <hr />
            <div>
              {
                this.props.comments.map(comment => (
                  <div className='align-self-center border m-2'>
                    <p className='p-2'>{comment.content}</p>
                    <small><em>{this.state.date}</em></small>
                  </div>
                ))
              }
            </div>

            <div className='add-comment m-2'>
              <form onSubmit={(e) => {
                e.preventDefault();
                this.handleCommentCreate(this.props.currentUser.id, this.props.match.params.id, {comment: this.state.content})
              }}
                >
                <input
                  onChange={this.handleChange}
                  name='comment'
                  placeholder='Add a new comment'
                />
                <button className='btn mt-3'>Add Comment</button>
              </form>

            </div>

          </div>

        </div>
      )
    } else {
      return <h2>...Loading</h2>
    }
  }
}

