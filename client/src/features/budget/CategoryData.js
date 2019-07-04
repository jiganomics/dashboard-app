import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CategoryData extends Component {
  render() {
    const {
      data,
    } = this.props;
    return (
      data.map(x => {
        return ([
          <td>{x.budget}</td>,
          <td>{x.actual}</td>,
          <td>{x.diff}</td>
        ])
      })
    );
  }
}

CategoryData.propTypes = {
  data: PropTypes.array.isRequired,
};

export default CategoryData;
