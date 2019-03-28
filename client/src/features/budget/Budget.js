import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BudgetHeader, BudgetGroup } from './';
import * as actions from './redux/actions';

class Budget extends Component {

  componentDidMount() {
    const {
      actions: {
        fetchBudgetGroups,
      }
    } = this.props;
    fetchBudgetGroups();
  }

  render() {
    const {
      budget: {
        budgetGroups,
      },
      author,
      text,
      handleChangeText,
    } = this.props;
    return (
      <div class="budget">
        <table frame="void" align="left" cellspacing="0" cols="53" rules="none" border="0">
          <colgroup><col width="165"/><col width="13"/><col width="44"/><col width="44"/><col width="39"/><col width="8"/><col width="44"/><col width="44"/><col width="39"/><col width="8"/><col width="44"/><col width="44"/><col width="39"/><col width="8"/><col width="44"/><col width="44"/><col width="39"/><col width="8"/><col width="44"/><col width="44"/><col width="39"/><col width="8"/><col width="44"/><col width="44"/><col width="39"/><col width="8"/><col width="44"/><col width="44"/><col width="39"/><col width="8"/><col width="44"/><col width="44"/><col width="39"/><col width="8"/><col width="44"/><col width="44"/><col width="39"/><col width="8"/><col width="44"/><col width="44"/><col width="39"/><col width="8"/><col width="44"/><col width="44"/><col width="39"/><col width="8"/><col width="44"/><col width="44"/><col width="39"/><col width="13"/><col width="59"/><col width="56"/><col width="56"/></colgroup>
          <tbody className="mbody">
            <BudgetHeader />
            {
              budgetGroups.map(group => {
                return <BudgetGroup group={group} />
              })
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
