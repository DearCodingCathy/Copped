import React from 'react'
import {Link} from 'react-router-dom'

export default function Header(props) {
  const { currentUser } = props;
  return (
    <header>

      {
        currentUser ?
          (
            <Link to='/allposts'><h1>Copped</h1></Link>
          )
          :
          (
            <Link to='/'><h1>Copped</h1></Link>
          )
}
      <hr/>
    </header>
  )
}
