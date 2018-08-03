import React from "react";
import Expense from "./Expense";

import "../../assets/css/table.css";
import Background from '../../assets/images/2.jpg';
const MonthExpenseTable = props => {
    const nightMode = { backgroundImage: `url(${Background})`  };

    return (
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
                    month={props.month}
                    year={props.year}
                    key={Math.random() * 100}
                    settings={props.settings}
                />
            </tbody>
        </table>
    );
};

export default MonthExpenseTable;
