import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import UserLogin from '../../screens/UserLogin/UserLogin'

import {createPost, readAllPost, readOnePost, updatePost, destroyPost} from '../../services/posts'
import {createComment, readAllComment, updateComment, destroyComment } from '../../services/comments'
import UserRegister from '../../screens/UserRegister/UserRegister'
import ProfileShow from '../../screens/ProfileShow/ProfileShow'
// import PostDisplay from '../PostDisplay/PostDisplay'
// import UserInfo from "../UserInfo/UserInfo"
import PostDetail from '../../screens/PostDetail/PostDetail'
import PostEdit from '../../screens/PostEdit/PostEdit'

export default class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: [],
      comments: [],
      post: []
    }
  }


  componentDidMount() {
    // debugger
    // const { currentUser } = this.props
    // if (this.props.currentUser) {
      // this.fetchPosts(this.props.currentUser.id);
    // }
    // this.fetchComments();
    this.fetchOnePosts();
}


  fetchOnePosts = async (user_id, id) => {
    const post = await readOnePost(user_id, id)
    this.setState({ post });
  }
  
  fetchPosts = async (id) => {
    const posts = await readAllPost(id);
    this.setState({ posts });
  }

  handlePostCreate = async (id, data) => {
    const newPost = await createPost(id, data);
    this.setState(prevState => ({
      posts: [...prevState.posts, newPost]
    }))
  }

  handlePostUpdate = async (user_id, id, data) => {
    const newPost = await updatePost(user_id, id, data);
    this.setState(prevState => ({
      posts: prevState.posts.map(post => post.id === parseInt(id) ? newPost : post)
    }))
  }

  handlePostDelete = async (user_id, id) => {
    await destroyPost(user_id, id);
    this.setState(prevState => ({
      posts: prevState.posts.filter(post => post.id !== id)
    }))
  }


  fetchComments = async (user_id, post_id) => {
    const comments = await readAllComment(user_id, post_id);
    this.setState({ comments });
  }

  handleCommentCreate = async (user_id, post_id, data) => {
    const newComment = await createComment(user_id, post_id, data);
    this.setState(prevState => ({
      posts: [...prevState.comments, newComment]
    }))
  }

  handleCommentUpdate = async (user_id, post_id, id, data) => {
    const newComment = await updateComment(user_id, post_id, id, data);
    this.setState(prevState => ({
      posts: prevState.comments.map(comment => comment.id === parseInt(id) ? newComment : comment)
    }))
  }

  handleCommentDelete = async (user_id, post_id, id) => {
    await destroyComment(user_id, post_id, id);
    this.setState(prevState => ({
      comments: prevState.comments.filter(comment => comment.id !== id)
    }))
  }



  render() {
    const { handleLogin, handleRegister, handleLogout } = this.props;



    if (this.props.currentUser) {
    return (
      <main>

       
        <Route path='/user/:username' render={(props) => (
          <>
          < ProfileShow
            {...props}
              currentUser={this.props.currentUser}
              fetchPosts={this.fetchPosts}
              posts={this.state.posts}
              handleLogout={handleLogout}
          />
            </>
        )} />
        <Route path='/post/:id' render={(props) => (
          
          <PostDetail
            {...props}
            currentUser={this.props.currentUser}
            posts={this.state.posts}
            fetchComments={this.fetchComments}
            comments={this.state.comments}
          />)} />

        <Route path='/editpost/:id' render={(props) => (
        
        <PostEdit
            {...props}
            currentUser={this.props.currentUser}
            posts={this.state.posts}
            fetchOnePosts={this.fetchOnePosts}
            handlePostUpdate={this.handlePostUpdate}
            post={this.state.post}
          />
        )} />

        {/* <Route path='/' render={(props) => (
          { ...props }
        )} /> */}

        {/* <Route path='/' render={(props) => (
          { ...props }
        )} /> */}

      </main>
    )
    } else {
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
              {...props}
              handleRegister={handleRegister}
            />
          )} />
</main>
      )
  }
}



}
