import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { getAllPost } from '../../services/posts';
import { Card, Button } from 'react-bootstrap'


export default class AllPost extends Component {
  state = {
    post:[]
  }

  componentDidMount() {
  this.fetchAllPosts()
}

  fetchAllPosts = async () => {
    const post = await getAllPost()
    this.setState({ post });
  }

  render() {
    return (
      <div>
        <h1 className=''>All Posts</h1>

        {this.state.post.map(post =>
          <div className=' d-flex justify-content-center m-4 mb-5 '>


            <Card style={{ width: '50rem' }}>
              <Card.Img variant="top" src={post.img_url} style={{ height: '15rem' }} />
              <Card.Body>
                <div className='d-flex justify-content-between'>
                  <Card.Title>{post.title}</Card.Title>
                </div>
                <Card.Text>
                  {post.content}
                </Card.Text>
                <Link to={`/post/${post.id}`}><Button variant="primary">Read More</Button></Link>
              </Card.Body>
            </Card>
          </div>
        )}

      </div>
    )
  }
}
