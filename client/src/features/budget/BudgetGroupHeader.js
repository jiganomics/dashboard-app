import React, { Component } from 'react';
import { MonthlyHeader } from './';
import { months } from './constants';

class BudgetGroupHeader extends Component {
  render() {
    const {
      name,
      type,
    } = this.props;
    var groupHeaderClasses = "groupHeader " + ((type === "income") ? "groupIncomeColor" : "groupExpenseColor");
    return (
      <tr>
        <td className={groupHeaderClasses}>{name}</td>
    		<td className="spacerColumn"></td>
        {
          months.map((month, idx) => (
            <MonthlyHeader type={type} />
          ))
        }
      </tr>
    );
  }
}

export default BudgetGroupHeader;
