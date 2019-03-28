import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

class HomePage extends Component {
  render() {
    return (
      <div className="finance-home-page">
        <a href="http://github.com/supnate/rekit">
        </a>
        <h1>Finances</h1>
        <p>
          Contratulations! You have created your Rekit app successfully! Seeing this page means everything works well
          now.
        </p>
        <p>
          By default <a href="https://github.com/supnate/rekit">Rekit Studio</a> is also started at{' '}
          <a href="http://localhost:6076">http://localhost:6076</a> to manage the project.
        </p>
        <p>
          This is an example feature showing about how to layout the container, how to use Redux and React Router. If
          you want to remove all sample code, just delete the feature from Rekit Studio. Alternatively you can run&nbsp;
          <code>rekit remove feature examples</code> by command line under the project folder.
        </p>
        <p>
          To learn more about how to get started, you can visit:{' '}
          <a href="http://rekit.js.org/docs/get-started.html">Get started</a>
        </p>
      </div>
    );
  }
}

HomePage.propTypes = {
    finance: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  finance: state.finance
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...actions }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
