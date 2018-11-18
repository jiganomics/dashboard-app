import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

class Comment extends Component {
  render() {
    const {
      author,
      children,
      id,
      handleUpdateComment,
      handleDeleteComment,
      timestamp,
    } = this.props;
    return (
      <div className="singleComment">
        <img alt="user_image" className="userImage" src={`https://picsum.photos/70?random=${id}`} />
        <div className="textContent">
          <div className="singleCommentContent">
            <h3>{author}</h3>
            <ReactMarkdown source={children} />
          </div>
          <div className="singleCommentButtons">
            <span className="time">{moment(timestamp).fromNow()}</span>
            <a onClick={() => { handleUpdateComment(id); }}>update</a>
            <a onClick={() => { handleDeleteComment(id); }}>delete</a>
          </div>
        </div>
      </div>
    );
  }
}

Comment.propTypes = {
  author: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  handleUpdateComment: PropTypes.func.isRequired,
  handleDeleteComment: PropTypes.func.isRequired,
  timestamp: PropTypes.string.isRequired,
};

export default Comment;
