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
            name="date"
            placeholder="Date…"
            value={author}
            onChange={handleChangeText}
          />
          <br/>
          <input
            type="text"
            name="payee"
            placeholder="Payee…"
            value={author}
            onChange={handleChangeText}
          />
          <br/>
          <input
            type="text"
            name="category"
            placeholder="Category…"
            value={author}
            onChange={handleChangeText}
          />
          <br/>
          <input
            type="text"
            name="amount"
            placeholder="Amount…"
            value={author}
            onChange={handleChangeText}
          />
          <br/>
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
