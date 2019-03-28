import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MonthlyHeader extends Component {
  render() {
    const {
      type,
    } = this.props;
    var actualHeaderClasses = "actualHeader " + ((type === "income") ? "actualIncomeColor" : "actualExpenseColor");
    return ([
      <td className="budgetHeader">Budget</td>,
      <td className={actualHeaderClasses}>Actual</td>,
      <td className="diffHeader">Diff</td>
    ]);
  }
}

MonthlyHeader.propTypes = {
  group: PropTypes.string.isRequired,
};

export default MonthlyHeader;
