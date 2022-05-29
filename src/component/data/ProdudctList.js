import axios from "axios";
import React, { Component } from "react";
import ProductRows from "./ProductRows";

export default class ProdudctList extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3000/posts")
      .then((response) => {
        this.setState({ posts: response.data });
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <table className="table table-stripd table-bordered table-hover">
          <thead>
            <tr>
              <th> ID </th>
              <th> Title </th>
              <th> Author </th>
              <th> Action </th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((post, index) => (
              <ProductRows post={post} key={index} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
