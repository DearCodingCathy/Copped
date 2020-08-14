import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import UserLogin from '../../screens/UserLogin/UserLogin'

import {createPost, readAllPost, readOnePost, updatePost, destroyPost} from '../../services/posts'
import {createComment, readAllComment, readOneComment, updateComment, destroyComment } from '../../services/comments'
import UserRegister from '../../screens/UserRegister/UserRegister'
import ProfileShow from '../../screens/ProfileShow/ProfileShow'
import PostDisplay from '../PostDisplay/PostDisplay'
import UserInfo from "../UserInfo/UserInfo"
import PostDetail from '../../screens/PostDetail/PostDetail'

export default class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: [],
      comments: [],
    }
  }


  componentDidMount() {
    // debugger
    const { currentUser } = this.props
    if (currentUser) {
      this.fetchPosts(currentUser.id);
    }
    this.fetchComments();
}



  fetchPosts = async (id) => {
    const posts = await readAllPost(id);
    this.setState({ posts });
  }

  handlePostCreate = async (data) => {
    const newPost = await createPost(data);
    this.setState(prevState => ({
      posts: [...prevState.posts, newPost]
    }))
  }

  handlePostUpdate = async (id, data) => {
    const newPost = await updatePost(id, data);
    this.setState(prevState => ({
      posts: prevState.posts.map(post => post.id === parseInt(id) ? newPost : post)
    }))
  }

  handlePostDelete = async (id) => {
    await destroyPost(id);
    this.setState(prevState => ({
      posts: prevState.posts.filter(post => post.id !== id)
    }))
  }


  fetchComments = async () => {
    const comments = await readAllComment();
    this.setState({ comments });
  }

  handleCommentCreate = async (data) => {
    const newComment = await createComment(data);
    this.setState(prevState => ({
      posts: [...prevState.comments, newComment]
    }))
  }

  handleCommentUpdate = async (id, data) => {
    const newComment = await updateComment(id, data);
    this.setState(prevState => ({
      posts: prevState.comments.map(comment => comment.id === parseInt(id) ? newComment : comment)
    }))
  }

  handleCommentDelete = async (id) => {
    await destroyComment(id);
    this.setState(prevState => ({
      comments: prevState.comments.filter(comment => comment.id !== id)
    }))
  }



  render() {
    const { handleLogin, handleRegister } = this.props;
    return (
      <main>
        <Route exact path='/' render={(props) => (
          <UserLogin
            {...props}
            handleLogin={handleLogin}
          />
        )} />

        <Route path='/register' render={(props) => (
          
        <UserRegister
          { ...props }
            handleRegister={handleRegister}
          />
        )} />
        
        <Route path='/user/:username' render={(props) => (
          <>
          < ProfileShow
            {...props}
            currentUser={this.props.currentUser}
            posts={this.state.posts}
          />
            </>
        )} />
          

        <Route path='/post/:id' render={(props) => (
          
          <PostDetail
            {...props}
            currentUser={this.props.currentUser}
            posts={this.state.posts}
          />

          
        )} />

        {/* <Route path='/' render={(props) => (
          { ...props }
        )} /> */}

        {/* <Route path='/' render={(props) => (
          { ...props }
        )} /> */}

        {/* <Route path='/' render={(props) => (
          { ...props }
        )} /> */}

      </main>
    )
  }
}
