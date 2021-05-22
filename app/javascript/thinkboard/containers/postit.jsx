import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { upvotePost, downvotePost } from '../actions'

class Postit extends React.Component {


  handleUpdate = (event) => {
    const upvote_id = "upvote-"+this.props.postit.id;
    const postit_id = "heart-"+this.props.postit.id;
    const elem = document.getElementById(postit_id);
    const count = document.getElementById(upvote_id);
    const classes = count.classList;
    if (classes.contains(`downvote-${this.props.postit.id}`)) {
      var minusOne = parseInt(count.innerHTML) -1
      count.innerHTML = minusOne
      elem.classList.toggle("highlight");
      count.classList.toggle(`downvote-${this.props.postit.id}`);
      this.props.downvotePost(this.props.postit.id, this.props.postit.upvotes);
    } else {
      elem.classList.add("highlight");
      var plusOne = this.props.postit.upvotes + 1
      count.innerHTML = plusOne
      count.classList.toggle(`downvote-${this.props.postit.id}`);
      this.props.upvotePost(this.props.postit.id, this.props.postit.upvotes);
    }
  }

  
  render() {
    const {  content, color, upvotes } = this.props.postit;
    const postit_classes = "postit d-flex flex-row align-items-center text-center "+color
    const postit_id = "heart-"+this.props.postit.id
    const upvote_id = "upvote-"+this.props.postit.id
    
    return (
      <div className={postit_classes}>
        <div className="postit-text text-center">
          { content}
          <i className="fas fa-heart heart"
            id={postit_id}
            onClick={this.handleUpdate}>
              <span id={upvote_id} className={"upvotes"}>{this.props.postit.upvotes}</span>
          </i>
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    postits: state.postits
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ upvotePost, downvotePost }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Postit);