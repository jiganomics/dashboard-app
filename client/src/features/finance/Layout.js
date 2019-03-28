import React, { Component } from 'react';
import { SidePanel } from './';

class Layout extends Component {
  render() {
    return (
      <div className="finance-layout">
        <SidePanel />
        <div className="finance-page-container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Layout;
