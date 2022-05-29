
import axios from 'axios';
import React, { Component } from 'react';

export default class Create extends Component {
  constructor(){
    super();
    this.state={
      id:'',
      title:'',
      author:''
    }
    this.changeId=this.changeId.bind(this);
    this.changeTitle=this.changeTitle.bind(this);
    this.changeAuthor=this.changeAuthor.bind(this);
    this.addPost=this.addPost.bind(this);
  }
    changeId(event){
      this.setState({id: event.target.value});
    };
     changeTitle(event){
      this.setState({title: event.target.value});
    }
    changeAuthor(event){
      this.setState({author: event.target.value});
    }
 
    addPost(event){
       event.preventDefault();
       let data={
         "id":this.state.id,
         "title":this.state.title,
         "author":this.state.author
       }
      axios.post("http://localhost:3000/posts",data)
      .then(response => {
      console.log(response.status);
      console.log(response.data);
      this.ref.addPost.reset();
      })
      .catch(error =>{console.log(error)});
    }
     
  
  render() {
    return (
     <form onSubmit={this.addPost} ref="addPost">
       <div className="form-group">
         <label> Enter Id </label>
         <input type="text" name='id' onChange={this.changeId} className='form-control'></input>
       </div>
       <div className="form-group">
         <label> Enter Title </label>
         <input type="text" name='title' className='form-control' onChange={this.changeTitle}></input>
       </div>
       <div className="form-group">
         <label> Enter Author </label>
         <input type="text" name='author' className='form-control' onChange={this.changeAuthor}></input>
       </div>
       <div className="form-group">
         <button type="submit" className='btn btn-primary'>Add Post </button>
       </div>
     </form>
    );
  }
}

