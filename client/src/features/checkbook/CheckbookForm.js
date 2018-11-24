import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export class CheckbookForm extends Component {
  static propTypes = {
    checkbook: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    const {
      author,
      text,
      submitComment,
      handleChangeText,
    } = this.props;
    return (
      <div className="checkbook-checkbook-form">
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
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    checkbook: state.checkbook,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckbookForm);
