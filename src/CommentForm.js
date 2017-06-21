// imports
import React, { Component } from ‘react’;
import style from ‘./style’;

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = { author: '', text: ''};
    // Addressing handlers
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // setting state on event change
  handleAuthorChange(e) {
  this.setState({ author: e.target.value });
  }
  handleTextChange(e) {
  this.setState({ text: e.target.value });
  }
  handleSubmit(e) {
  e.preventDefault();
  console.log(`${this.state.author} said “${this.state.text}”`)
  //be tying this into the POST method in a bit
  }
  render(){
    return(
      <form style={ style.commentForm } onSubmit={ this.handleSubmit }>
      // Author input, their name
       <input
         type='text'
         placeholder='Your name…'
         style={ style.commentFormAuthor}
         value={ this.state.author }
         onChange={ this.handleAuthorChange }
       />
       // What they would like to comment
       <input
         type=’text’
         placeholder=’Say something…’
         style={ style.commentFormText}
         value={ this.state.text }
         onChange={ this.handleTextChange }
       />
       // Submit button
       <input
         type=’submit’
         style={ style.commentFormPost }
         value=’Post’
        />
      </form>
    )
  }
}

export default CommentForm;
