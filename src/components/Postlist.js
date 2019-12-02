import React, { Component } from 'react'
import Axios from "axios"

export class Postlist extends Component {
  constructor(props){
      super(props)
      this.state={
          postList:[]
      }
  }
  componentDidMount(){
      Axios.get("http://localhost:3000/posts")
      .then(result=>{
          this.setState({
              postList:result.data
          })
      })
  }
    render() {
        return (
            <div>
                {this.state.postList.map(post=><p>{post.text}</p>)}
            </div>
        )
    }
}

export default Postlist
