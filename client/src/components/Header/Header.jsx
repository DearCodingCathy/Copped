import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header(props) {
  const { currentUser } = props;
  return (
    <div className='d-flex'>
    <header className='d-flex justify-content-center'>

      {
        currentUser ?
          (
            <Link to='/allposts'><h1 className='text-light'>Copped</h1></Link>
          )
          :
          (
              <Link to='/'><h1 className='text-light'>Copped</h1></Link>
          )
}
      {/* <hr/> */}
      </header>
    </div>
  )
}
