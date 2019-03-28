import React, { Component } from 'react';
import { months } from './constants';

class CategoryData extends Component {
  render() {
    return (
      months.map((month, idx) => {
        return ([
          <td>0</td>,
          <td>0</td>,
          <td>0</td>
        ])
      })
    );
  }
}

export default CategoryData;
