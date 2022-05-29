import axios from "axios";
import React, { Component } from "react";

export default class ProductRows extends Component {
  constructor(props) {
    super(props);
    this.deletPostsById = this.deletPostsById.bind(this);
  }
  deletPostsById(){
    axios.delete("http://localhost:3000/posts/"+this.props.post.id)
    .then(response =>console.log(response.status))
    .catch(error => console.error(error))

  }

  render() {
    return (
      <tr>
        <td>{this.props.post.id}</td>
        <td>{this.props.post.title}</td>
        <td>{this.props.post.author}</td>
        <td>
          <button type="button" className="btn btn-danger" onClick={this.deletPostsById}>
            Delete
          </button>
          <button type="button" className="btn btn-warning">
            Edit
          </button>
        </td>
      </tr>
    );
  }
}
