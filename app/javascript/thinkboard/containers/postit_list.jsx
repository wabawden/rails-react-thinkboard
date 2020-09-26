import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchPostits } from '../actions';
import Postit from '../components/postit';
import PostitForm from '../containers/postit_form';

class PostitList extends Component {
  componentWillMount() {
    this.fetchPostits();
  }

  componentDidMount() {
    this.refresher = setInterval(this.fetchPostits, 5000);
  }

  componentDidUpdate() {
    this.list.scrollTop = this.list.scrollHeight;
  }

  componentWillUnmount() {
    clearInterval(this.refresher);
  }

  fetchPostits = () => {
    this.props.fetchPostits();
  }

  render () {
    return (
      <div>
        <h1>ThinkBoard</h1>
        <p>A React SPA in progress. Post questions and feedback during meetings/training sessions etc.</p>
        <div className="d-flex flex-column justify-content-center">
        <PostitForm />
          <div className="postits-container d-flex flex-wrap" ref={(list) => { this.list = list; }}>
            {
              this.props.postits.map((postit) => {
                return <Postit key={postit.id} postit={postit} />;
              })
            }
          </div>
        </div>
        <div className="footer">
        <p>Built with React + Redux + Rails - <a href="https://github.com/wabawden/rails-react-thinkboard" target="_blank">GitHub Repo</a></p>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    postits: state.postits,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPostits }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostitList);