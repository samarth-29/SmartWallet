import React from "react";
import Expense from "./Expense";

import "../../assets/css/table.css";
import Background from '../../assets/images/2.jpg';
const ExpenseTable = props => {
    const nightMode = { backgroundImage: `url(${Background})` };

    return (
      <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <table className="table table-striped table-bordered table-dark rwd-table expense-table" style={nightMode}>
                <thead>
                    <tr>
                        <th scope="col">Sr.No.</th>
                        <th scope="col">Date</th>
                        <th scope="col">Expense</th>
                        <th scope="col">Category</th>
                        <th scope="col">Comments</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <Expense
                        expenses={props.expenses}
                        authUser={props.authUser}
                        key={Math.random() * 100}
                        settings={props.settings}
                    />
                </tbody>
            </table>
          </div>
      </div>
    );
};

export default ExpenseTable;
