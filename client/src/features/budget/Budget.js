import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BudgetHeader, BudgetGroup } from './';
import { months } from './constants';
import * as actions from './redux/actions';

class Budget extends Component {

  componentDidMount() {
    const {
      actions: {
        fetchBudgetGroups,
        fetchCategories,
        fetchBudgetData,
      }
    } = this.props;
    fetchBudgetGroups();
    fetchCategories();
    fetchBudgetData();
  }

  render() {
    const {
      budget: {
        budgetGroups,
        categories,
        budgetData,
      },
    } = this.props;

    const getCategoryData = (id) => {
      const data = [];
      months.map((month, idx) => {
        data[idx] = budgetData[id] ? {
          budget: budgetData[id].budget[idx],
          actual: budgetData[id].actual[idx],
          diff: budgetData[id].budget[idx] - budgetData[id].actual[idx],
        } : {
          budget: 0,
          actual: 0,
          diff: 0,
        };
      });
      return data;
    };

    const getBudgetGroupData = (group) => {
      const data  = {};
      group.categories.map((category, idx) => data[category.id] = getCategoryData(category.id) );
      return data;
    };

    return (
      <div class="budget">
        <table frame="void" align="left" cellspacing="0" cols="53" rules="none" border="0">
          <colgroup><col width="165"/><col width="13"/><col width="44"/><col width="44"/><col width="39"/><col width="8"/><col width="44"/><col width="44"/><col width="39"/><col width="8"/><col width="44"/><col width="44"/><col width="39"/><col width="8"/><col width="44"/><col width="44"/><col width="39"/><col width="8"/><col width="44"/><col width="44"/><col width="39"/><col width="8"/><col width="44"/><col width="44"/><col width="39"/><col width="8"/><col width="44"/><col width="44"/><col width="39"/><col width="8"/><col width="44"/><col width="44"/><col width="39"/><col width="8"/><col width="44"/><col width="44"/><col width="39"/><col width="8"/><col width="44"/><col width="44"/><col width="39"/><col width="8"/><col width="44"/><col width="44"/><col width="39"/><col width="8"/><col width="44"/><col width="44"/><col width="39"/><col width="13"/><col width="59"/><col width="56"/><col width="56"/></colgroup>
          <tbody className="mbody">
            <BudgetHeader />
            {
              budgetData.map(group => {
                return <BudgetGroup group={group} />
              })
              /*
              budgetGroups.map(group => {
                return <BudgetGroup group={group} data={getBudgetGroupData(group)} />
              })
              */
            }
          </tbody>
        </table>
      </div>
    );
  }
}

Budget.propTypes = {
  handleUpdateComment: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    budget: state.budget,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...actions }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Budget);
