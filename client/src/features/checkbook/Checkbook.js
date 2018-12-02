import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

class Checkbook extends Component {
  componentDidMount() {
    console.log("mounted...");
    this.props.actions.checking();
  }

  render() {
    const {
      data,
      author,
      text,
      submitComment,
      handleChangeText,
      checkbook: {
        transactions,
        // checkingPending,
        // checkingError,
      }
    } = this.props;
    return (
      <div className="checkbook-checkbook">
      <ReactTable
          data={transactions}
          columns={[
            {
              Header: "Date",
              accessor: "date"
            },
            {
              Header: "C",
              id: "lastName",
              accessor: d => d.lastName
            },
            {
              Header: "Payee",
              accessor: "payee"
            },
            {
              Header: "Category",
              accessor: "category"
            },
            {
              Header: "Amount",
              accessor: "amount"
            },
            {
              Header: "Balance",
              accessor: "visits"
            }
          ]}
          defaultPageSize={20}
          className="-striped -highlight"
        />
        {transactions && transactions.length > 0 ? (
          <ul className="examples-reddit-list">
            {transactions.map(item => (
              <li key={item._id}>
                <a href={item.author}>{item.payee}</a>
              </li>
            ))}
          </ul>
        ) : (
          <div className="no-items-tip">No items yet.</div>
        )}

        <a href="/checkbook/entry">New Entry</a>
      </div>
    );
  }
}

Checkbook.propTypes = {
  checkbook: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  submitComment: PropTypes.func.isRequired,
  handleChangeText: PropTypes.func.isRequired,
  text: PropTypes.string,
  author: PropTypes.string,
};

const mapStateToProps = state => ({
  checkbook: state.checkbook,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...actions }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkbook);
