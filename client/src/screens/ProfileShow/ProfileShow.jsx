import React, { Component } from 'react'
import {readOneUser, readAllUser} from '../../services/users'

export default class ProfileShow extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      user: []
    }
  }

  async componentDidMount() {
    let { username } = this.props.match.params
    // const user = await readOneUser()
    // this.setState({
    //   user
    // })
    
  }




  render() {
    return (
      <div>
        
      </div>
    )
  }
}

