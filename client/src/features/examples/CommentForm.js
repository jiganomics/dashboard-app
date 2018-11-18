import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CommentForm extends Component {
  render() {
    const {
      author,
      text,
      submitComment,
      handleChangeText,
    } = this.props;
    return (
      <form onSubmit={submitComment}>
        <input
          type="text"
          name="author"
          placeholder="Your name…"
          value={author}
          onChange={handleChangeText}
        />
        <input
          type="text"
          name="text"
          placeholder="Say something..."
          value={text}
          onChange={handleChangeText}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

CommentForm.propTypes = {
  submitComment: PropTypes.func.isRequired,
  handleChangeText: PropTypes.func.isRequired,
  text: PropTypes.string,
  author: PropTypes.string,
};

CommentForm.defaultProps = {
  text: '',
  author: '',
};

export default CommentForm;
