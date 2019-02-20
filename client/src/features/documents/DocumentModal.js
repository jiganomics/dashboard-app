import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DocumentModal extends Component {
  static propTypes = {

  };

  render() {
    const {
      handleClose,
      show,
      children
    } = this.props;
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          {children}
          <button onClick={handleClose}>close</button>
        </section>
      </div>
    );
  }
}

DocumentModal.propTypes = {
    // show: PropTypes.boolean,
};

export default (DocumentModal);
