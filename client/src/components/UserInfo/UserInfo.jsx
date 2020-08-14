import React from 'react'
import {Link} from 'react-router-dom'
import './UserInfo.css'
import { BsFillGearFill} from 'react-icons/bs'

export default function UserInfo(props) {
  const { currentUser } = props;

  return (
    <>
      { currentUser ?
        (
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
                  <img className='rounded-circle custom-img' src='https://i.imgur.com/36nRvIA.jpg' alt='Blank'/>
              }
              <Link><BsFillGearFill className='gear-icon text-dark' /></Link>
            </div>
            <h4>{currentUser.first_name} {currentUser.last_name}</h4>
            <p>Bio:</p>
            <p>{currentUser.bio}</p>
            {/* <button>Edit Profile</button> */}
            <hr />
          </div>

          )
            :
          (
            null
          )
      }
    </>
  )
}
