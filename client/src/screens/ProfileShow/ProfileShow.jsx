import React, { Component } from 'react'
import { Tab, Tabs, Card, Button, DropdownButton, Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BsFillGearFill, BsThreeDots } from 'react-icons/bs'


export default class ProfileShow extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const { currentUser } = this.props
    return (
      <div>

        <div className='container'>
          <div className='d-flex justify-content-center'>
            <h4 className='mt-1'>{currentUser.username}</h4>
          </div>

          <hr />
          <div className='d-flex justify-content-between'>
            {
              currentUser.img_url ?
                <img className='rounded-circle custom-img' src={currentUser.img_url} alt={currentUser.username} />
                :
                <img className='rounded-circle custom-img' src='https://i.imgur.com/36nRvIA.jpg' alt='Blank' />
            }
            <Link to={`/edit/${currentUser.username}`}><BsFillGearFill className='gear-icon text-dark' /></Link>
          </div>
          <h4>{currentUser.first_name} {currentUser.last_name}</h4>
          <p>Bio:</p>
          <p>{currentUser.bio}</p>
          {/* <button>Edit Profile</button> */}
          <hr />
        </div>


        <div>
        <Tabs defaultActiveKey="home" >
            <Tab eventKey="home" title="Posts">
              

              {this.props.posts.map(post =>
            <div className='d-flex justify-content-center m-4'>
                <Card style={{ width: '40rem' }}>
                  <Card.Img variant="top" src={post.img_url} />
                    <Card.Body>
                      <div className='d-flex justify-content-between'>
                      <Card.Title>{post.title}</Card.Title>
                        
                        {/* <Dropdown.toggle id="dropdown-basic-button" title={<BsThreeDots />}>
                          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.toggle> */}
                        

                        <Dropdown>
                          <Dropdown.Toggle variant="light" id="dropdown-basic">
                            <BsThreeDots />
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href="">Edit Post</Dropdown.Item>
                            <Dropdown.Item href="" className='text-danger'>Delete Post</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    <Card.Text>
                      {post.content}
                  </Card.Text>
                      <Link to={`/post/${post.id}`}><Button variant="primary">Read More</Button></Link>
                  </Card.Body>
                </Card>
                </div>
                
          
            // <div className='card m-5'><h4>{post.title}</h4>
            //   <p>{post.content}</p>
            //   {/* <img src={post.img_url} alt={post.title} /> */}
            // </div>
              )}
              


      </Tab>
      <Tab eventKey="profile" title="Sneaker Post">

      </Tab>
      {/* <Tab eventKey="contact" title="Contact" >
      </Tab> */}
    </Tabs> 
        </div>
      </div>
    )
  }
}
