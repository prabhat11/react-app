import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";

 class ProductRows extends Component {

  deletPostsById = () =>{
    axios.delete("http://localhost:3000/posts/"+ this.props.post.id)
    .then((response) =>{
      if(response.status===200){
       this.props.dispatch({
        type : 'DELETE_POST',
        id : this.props.post.id,
       })}
      })
      .catch(error => console.error(error))
  }
  add =()=>{
    let addenble= 'true'

  }

  render() {
    return (
      <>
      <tr>
        <td>{this.props.post.id}</td>
        <td>{this.props.post.title}</td>
        <td>{this.props.post.author}</td>
        <td>
        <button type="button" className="btn btn-primary" onClick={this.add}>
            Add
          </button>
          <button type="button" className="btn btn-danger" onClick={this.deletPostsById}>
            Delete
          </button>
          <button type="button" className="btn btn-warning">
            Edit
          </button>
        </td>
      </tr>
      
      </>
    );
  }
}

/* const mapStateToProps=(state)=> {
  return {
       posts: state
  }
} */
export default connect()(ProductRows);