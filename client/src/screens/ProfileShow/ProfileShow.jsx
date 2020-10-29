import React, { Component } from 'react'
import { Tab, Tabs, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FiLogOut } from 'react-icons/fi'
// import{ BsGear } from 'react-icons/bs'
import { Dialog } from "react-bootstrap-easy-dialog";
import './ProfileShow.css'



export default class ProfileShow extends Component {
  state = {
    date: ''
  }

  componentDidMount() {
    this.props.fetchPosts(this.props.currentUser.id)

    this.setState({
      date: new Date(this.props.currentUser.created_at).toDateString()
    })
  }
  
  render() {
    const { currentUser, handleLogout, history } = this.props
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

            <Dialog>
              {dialog => {
                async function handleClick() {
                  const confirmed = await dialog.confirm("Are you sure you want to log out?");
                  console.log(confirmed);
                  const logout = await confirmed ?
                    (
                      handleLogout(),
                      history.push(`/`)
                      )
                      :
                      null
                  return logout
                }
                return <><FiLogOut onClick={handleClick} className='gear-icon text-dark' /> </>
              }}
            </Dialog> 
            
            
            
            
            {/* Post MVP EDIT Profile Feature */}
            {/* <Link to={`/editaccount/${currentUser.username}`}><BsGear /></Link> */}

          </div>
          <h4>{currentUser.first_name} {currentUser.last_name}</h4>
          <p>Member Since: {this.state.date}</p>
          <p>Bio:</p>
          <p>{currentUser.bio}</p>
          <hr />
        </div>

        <div>
        <Tabs defaultActiveKey="home" >
            <Tab eventKey="home" title="Posts">
              

              {this.props.posts.map(post =>
                <div className=' d-flex justify-content-center m-4 mb-5 '>
                  

                  <Card style={{ width: '50rem' }}>
                    <Card.Header>
                      <Card.Title>{post.title}</Card.Title>
                    </Card.Header>
                    <Card.Img className='mx-auto' variant="top" src={post.img_url} style={{ height: '10rem', width: '20rem'}} />
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
      </Tab>
      <Tab eventKey="profile" title="Sneaker Post">

      </Tab>
    </Tabs> 
        </div>
      </div>
    )
  }
}
