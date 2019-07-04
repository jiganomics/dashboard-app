import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CategoryData from './CategoryData';

class BudgetCategory extends Component {
  render() {
    const {
      category,
      //data,
      idx,
    } = this.props;
    return (
      <tr key={idx}>
        <td>{category.name}</td>
        <td className="spacerColumn"></td>
        <CategoryData data={category.data} />
      </tr>
    );
  }
}

BudgetCategory.propTypes = {
  category: PropTypes.shape({}).isRequired,
  data: PropTypes.array.isRequired,
};

export default BudgetCategory;
