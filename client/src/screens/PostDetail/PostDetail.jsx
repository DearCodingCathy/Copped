import React from 'react'
import './PostDetail.css'
import {Link} from 'react-router-dom'
import { Component } from 'react'
import { Dropdown } from 'react-bootstrap'
import { BsThreeDots, BsFillGearFill } from 'react-icons/bs'
// import {readAllPost} from '../../services/posts'



export default class PostDetail extends Component {
  // state = {
  //   post: []
  // };



  componentDidMount() {
    this.props.fetchComments(this.props.currentUser.id, this.props.match.params.id)
    // this.fetchPosts(this.props.match.params.id)
  }
  
  // fetchPosts = async (id) => {
  //   const posts = await readAllPost(id);
  //   this.setState({ posts });
  // }


  render() {
    const prod = this.props.posts.find(post => post.id === parseInt(this.props.match.params.id))

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
                <Dropdown.Item href="" className='text-danger'>Delete Post</Dropdown.Item>
              </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
            
            <hr />

            <div className=''>
              

            <div className='d-flex ml-4 mb-5'>
              <div className='mr-3'>
                  <Link to={`/user/${prod.user.username}`}><img className='rounded-circle user-img' src={prod.user.img_url} alt={prod.user.username} /></Link>
              </div>
              <div className='d-flex flex-column'>
                <small>Written By:</small>
                <small>{prod.user.first_name} {prod.user.last_name}</small>
                <small>{prod.location}</small>
                <small>{prod.created_at}</small>
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
                  <div className='align-self-center'>
                    <small>{comment.created_at}</small>
                    <p>{comment.content}</p>
                  </div>
                ))
              }
            </div>

          </div>
        
        </div>
      )
    } else {
      return <h2>...Loading</h2>
    }
  }
}

