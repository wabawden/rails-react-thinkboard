import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { upvotePost } from '../actions'

class Postit extends React.Component {


  handleUpdate = (event) => {
    this.props.upvotePost(this.props.postit.id, this.props.postit.upvotes);
    const postit_id = "heart-"+this.props.postit.id
    const elem = document.getElementById(postit_id);
    elem.style.color = "#fff"
  }

  
  render() {
    const {  content, color, upvotes } = this.props.postit;
    const postit_classes = "postit d-flex flex-row align-items-center text-center "+color
    const postit_id = "heart-"+this.props.postit.id
    
    return (
      <div className={postit_classes}>
        <div className="postit-text text-center">
          { content}
          <i className="fas fa-heart heart"
            id={postit_id}
            onClick={this.handleUpdate}>
              <span className="upvotes">{this.props.postit.upvotes}</span>
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
  return bindActionCreators({ upvotePost }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Postit);