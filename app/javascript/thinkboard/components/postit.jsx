import React, { Component } from 'react';


const Postit = (props) => {
  function handleUpdate(event) {
    console.log('heloooooo')
    console.log(event.target)
  }
  const {  content, color, upvotes } = props.postit;
  const postit_classes = "postit d-flex flex-row align-items-center text-center "+color

  return (
    <div className={postit_classes}>
      <div className="postit-text text-center">
        {content}
        <i className="fas fa-heart heart" onClick={handleUpdate}></i>
      </div>
    </div>
  );
};

export default Postit;