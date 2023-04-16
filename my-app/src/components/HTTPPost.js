import React, { Component } from 'react'
import axios from 'axios'

export class HTTPPost extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         apiResponse: null
      }
    }
    postToAPI = () => {
        axios.post('https://jsonplaceholder.typicode.com/posts', 
        {
            title: 'Hello world',
            body: 'It works',
            userId: 123,
        }
        ).then(response => {
            this.setState({
                apiResponse: response.data
            })
        })
    }

  render() {
    const {apiResponse} = this.state
    return (
      <div>
        <button onClick={this.postToAPI}>Create post</button>
        {
            apiResponse 
            ? (
                <div>
                    <h1>{apiResponse.title}</h1>
                    <p>Post id: {apiResponse.id}</p>
                    <p>{apiResponse.body}</p>
                    <p>User id: {apiResponse.userId}</p>
                </div>
            ) :
            ( 
                <p>Please click button above</p>
            )
        }
      </div>
    )
  }
}

export default HTTPPost