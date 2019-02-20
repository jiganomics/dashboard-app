import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import { DocumentModal } from './';

class DefaultPage extends Component {
  render() {
    const {
      documents: {
        selectedFile,
        fileType,
        show,
      },
      actions: {
        handleSelectedFile,
        showDocumentModal,
        hideDocumentModal,
      }
    } = this.props;
    return (
      <div className="documents-default-page">
        <a href="http://github.com/supnate/rekit">
        </a>
        <h1>Documents</h1>
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
        <div className="App">
          <DocumentModal show={show} handleClose={hideDocumentModal}>
            <div class="PDF">
              <object data={selectedFile} type={fileType} width="750" height="600">
              </object>
            </div>
            <input type="file" name="" id="" onChange={handleSelectedFile} />
          </DocumentModal>
          <button onClick={showDocumentModal}>Open</button>
        </div>
      </div>
    );
  }
}

DefaultPage.propTypes = {
    documents: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  documents: state.documents,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...actions }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(DefaultPage);
