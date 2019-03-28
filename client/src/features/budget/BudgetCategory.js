import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CategoryData from './CategoryData';

class BudgetCategory extends Component {
  render() {
    const {
      category,
      idx,
    } = this.props;
    return (
      <tr key={idx}>
        <td>{category.name}</td>
        <td className="spacerColumn"></td>
        <CategoryData />
      </tr>
    );
  }
}

BudgetCategory.propTypes = {
  category: PropTypes.shape({}).isRequired,
};

export default BudgetCategory;
