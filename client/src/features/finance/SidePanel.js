import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

class SidePanel extends Component {
  render() {
    return (
      <div className="finance-side-panel">
        <ul>
          <li>
            <Link to="/finances">Finances</Link>
          </li>
          <li>
            <Link to="/budget">Budget</Link>
          </li>
          <li>
            <Link to="/checkbook">Checkbook</Link>
          </li>
          <li>
            <Link to="/">Back to start page</Link>
          </li>
        </ul>
        <div className="memo">
          This is a Rekit feature that contains some examples for you to quick learn how Rekit works. To remove it just
          delete the feature.
        </div>
      </div>
    );
  }
}

SidePanel.propTypes = {
    finance: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  finance: state.finance
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...actions }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SidePanel);
