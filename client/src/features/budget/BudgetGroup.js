import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BudgetGroupHeader, BudgetCategory } from './';

class BudgetGroup extends Component {
  render() {
    const {
      group,
      //data,
    } = this.props;
    return ([
      <BudgetGroupHeader name={group.name} type={group.type} />,
      group.categories.map((category, idx) => {
        return (<BudgetCategory category={category} idx={idx} />)
      /*
        return (<BudgetCategory category={category} data={data[category.id]} idx={idx} />)
      */
      })
    ]);
  }
}

BudgetGroup.propTypes = {
  group: PropTypes.shape({}).isRequired,
};

export default BudgetGroup;
