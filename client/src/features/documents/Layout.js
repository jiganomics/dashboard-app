import React, { Component } from 'react';
import { SidePanel } from './';

export default class Layout extends Component {
  static propTypes = {

  };

  render() {
    return (
      <div className="documents-layout">
        <SidePanel />
        <div className="documents-page-container">
          {this.props.children}
        </div>
      </div>
    );
  }
}
