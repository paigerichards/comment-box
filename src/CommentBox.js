// importing req files
import React, { Component } from 'react';
import CommentList from ‘./CommentList’;
import CommentForm from ‘./CommentForm’;
import DATA from ‘../data’;
import style from ‘./style’;

// Addressing box class
class CommentBox {
  // initalizing props and data state
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  render() {
    return(
      // rendered to the user
      <div style={ style.commentBox }>
        <h2>Comments:</h2>
        <CommentList data={ DATA }/> // rendering data
        <CommentForm />
      </div>
    )
  }
}

export default CommentBox;
