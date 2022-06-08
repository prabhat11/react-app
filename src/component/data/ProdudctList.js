import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import Create from "./Create";
import ProductRows from "./ProductRows";
import Update from "./Update";
import $ from 'jquery';

class ProdudctList extends Component {
  
  componentWillMount() {
    if(this.props.add==='true'){
      $('.create').css('display', 'none');
    }
    axios
      .get("http://localhost:3000/posts")
      .then((response) => {
       this.props.dispatch({
         type : 'FETCH_POST',
         posts : response.data
       });
      
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
          <tbody>{
            this.props.posts.map((post, index) => (
              <ProductRows post={post} key={index} />
            ))
          }
          </tbody>
        </table>
        <div className="container align-items-center justify-content-center visible create">
          <Create/>
          </div>
          <div className="container align-items-center justify-content-center visible edit">
          <Update/>
          </div>
      </div>
    );
  }
}
const mapStateToProps=(state)=> {
  return {
       posts: state
  }
};
export default connect(mapStateToProps)(ProdudctList);
