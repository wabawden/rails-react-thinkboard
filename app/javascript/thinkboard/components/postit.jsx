import React, { Component } from 'react';


const Postit = (props) => {
  const {  content, color } = props.postit;
  const postit_classes = "postit d-flex flex-row align-items-center text-center "+color

  return (
    <div className={postit_classes}>
      <div className="postit-text text-center">
        {content}
        <i className="fas fa-heart heart"></i>
      </div>
    </div>
  );
};

export default Postit;