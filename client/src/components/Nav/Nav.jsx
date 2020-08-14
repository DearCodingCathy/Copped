import React from 'react'
import './Nav.css'
import {Link} from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import { AiFillHome, AiTwotoneFire } from 'react-icons/ai'
import { MdAdd } from 'react-icons/md'

export default function Navigation(props) {
  const { currentUser } = props;

  return (
  <>
    { currentUser ? 
        (
        <>
            <Navbar fixed='bottom' sticky='bottom' bg="light" variant="light">
              <Nav className="">
                <Link to='/'><AiFillHome className='nav-icons text-dark'/></Link>
                <Link to='/'><MdAdd className='nav-icons text-dark'/></Link>
                <Link to='/'><AiTwotoneFire className='nav-icons text-dark'/></Link>
                <Link to={`/user/${currentUser.username}`}>
                  <img className='rounded-circle nav-img'src={currentUser.img_url} alt={currentUser.username} />
                </Link>
              </Nav>
            </Navbar>
        </>
      )
        :
        (
          null
        )
}
</>
    
  )
}
