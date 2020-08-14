import React from 'react'
import './PostDetail.css'
import { Component } from 'react'

export default class PostDetail extends Component {



  componentDidMount() {
  this.props.fetchComments(this.props.currentUser.id, this.props.match.params.id)
}


  render() {
    const prod = this.props.posts.find(post => post.id === parseInt(this.props.match.params.id))

    if (prod) {
      return (

        <div className='d-flex flex-row'>
          <div className='container border d-flex flex-column justify-items-center mb-5'>
            <img className='prod-img align-self-center mt-5' src={prod.img_url} alt={prod.title} />
            <h1 className='align-self-center'>{prod.title}</h1>

        
            <div className='d-flex'>
              <div className='mr-3'>
                <img className='rounded-circle user-img' src={prod.user.img_url} alt={prod.user.username} />
              </div>
              <div className='d-flex flex-column'>
                <small>Written By:</small>
                <small>{prod.user.first_name} {prod.user.last_name}</small>
                <small>{prod.location}</small>
                <small>{prod.created_at}</small>
              </div>
            </div>
        

            <div className='mt-5 text-container'>
              <p>{prod.content}</p>
            </div>
          </div>
        
          <div className='comments-container border mt-2'>
            <h2>This is the Comment Section</h2>
          </div>
        
        </div>
      )
    } else {
      return <h2>...Loading</h2>
    }
  }
}

