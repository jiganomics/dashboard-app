import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

class CounterPage extends Component {
  render() {
    const {
      examples: {
        count,
      },
      actions: {
        counterMinusOne,
        counterPlusOne,
        counterReset,
      }
    } = this.props;
    return (
      <div className="examples-counter-page">
        <h1>Counter</h1>
        <p>This is simple counter demo to show how Redux sync actions work.</p>
        <button className="btn-minus-one" onClick={counterMinusOne} disabled={count === 0}>
          -
        </button>
        <span>{this.props.examples.count}</span>
        <button className="btn-plus-one" onClick={counterPlusOne}>+</button>
        <button className="btn-reset" onClick={counterReset}>
          Reset
        </button>
      </div>
    );
  }
}

CounterPage.propTypes = {
    examples: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  examples: state.examples
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...actions }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterPage);
