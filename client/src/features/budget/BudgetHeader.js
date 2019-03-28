import React, { Component } from 'react';
import { months } from './constants';

class BudgetHeader extends Component {
  render() {
    return (
      <tr>
        <td></td><td></td>
        {
          months.map((month, idx) => (
              <td align="center" colSpan={3}><b>{month}</b></td>
          ))
        }
      </tr>
    );
  }
}

export default BudgetHeader;
