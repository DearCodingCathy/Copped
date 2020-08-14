import React from 'react'
import './PostDetail.css'

export default function PostDetail(props) {
  
  const prod = props.posts.find(post => post.id === parseInt(props.match.params.id))

  if (prod) {
    return (
      <div className='container border d-flex flex-column justify-items-center'>
        <img className='prod-img align-self-center mt-5' src={prod.img_url} alt={prod.title}/>
        <h1 className='align-self-center'>{prod.title}</h1>

        <div className='d-flex flex-column'>
        <small>Written By:</small>
        <small>{prod.user.first_name} {prod.user.last_name}</small>
        <small>{prod.location}</small>
        <small>{prod.created_at}</small>
        </div>

        <div className='mt-5 '>
        <p>{prod.content}</p>
        </div>

      </div>
    )
  } else {
    return <h2>...Loading</h2>
  }
} 

