import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import UserLogin from '../../screens/UserLogin/UserLogin'

import {createPost, readAllPost, readOnePost, updatePost, destroyPost} from '../../services/posts'
import {createComments, readAllComments, readOneComments, updateComments, destroyComments } from '../../services/comments'

export default class Main extends Component {
  state = {
    posts: [],
    comments: []
  }

  componentDidMount() {
  
}



  fetchPosts = async () => {
    const posts = await readAllPost();
    this.setState({ posts });
  }

  handlePostCreate = async (data) => {
    const newPost = await postPost(data);
    this.setState(prevState => ({
      posts: [...prevState.posts, newPost]
    }))
  }

  handlePostUpdate = async (id, data) => {
    const newPost = await putPost(id, data);
    this.setState(prevState => ({
      posts: prevState.posts.map(post => post.id === parseInt(id) ? newPost : post)
    }))
  }

  handlePostDelete = async (id) => {
    await deletePost(id);
    this.setState(prevState => ({
      foods: prevState.posts.filter(post => post.id !== id)
    }))
  }



  render() {
    return (
      <main>
        <Route path='/' render={(props) => (
          <UserLogin
            {...props}
            // handleLogin={handleLogin}
          />
        )} />

        <Route path='/' render={(props) => (
          { ...props }
        )} />

        <Route path='/' render={(props) => (
          { ...props }
        )} />

        <Route path='/' render={(props) => (
          { ...props }
        )} />

        <Route path='/' render={(props) => (
          { ...props }
        )} />

        <Route path='/' render={(props) => (
          { ...props }
        )} />

        <Route path='/' render={(props) => (
          { ...props }
        )} />

      </main>
    )
  }
}
