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
        <div className='d-flex justify-content-center mt-3'>
          <h1 className='mx-auto'>All Posts</h1>
</div>

        {this.state.post.map(post =>
          <div className=' d-flex justify-content-center m-4 mb-5 '>


            <Card style={{ width: '50rem' }}>
              <Card.Header>
                <Card.Title>{post.title}</Card.Title>
              </Card.Header>
              <Card.Img className='mx-auto' variant="top" src={post.img_url} style={{ height: '10rem', width: '20rem' }} />
              <Card.Body>
                <div className='d-flex justify-content-between'>
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
