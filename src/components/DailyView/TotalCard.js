import React from "react";
import * as utils from "../Util";
import Loader from "../Common/Loader";
const TotalCard = props => {
    const pad0 = {
        padding: "0"
    };

    let expenses = props.expenses;
    let currentUser = props.authUser;
    let selectedDate = props.date;

    let totalExpenses = 0;

    if (!expenses || !currentUser) {
        return (
            <div>
                <Loader />
            </div>
        );
    }

    if (expenses && currentUser) {
        let eachExpense = utils.eachExpense(expenses);
        let thisUsersExpenses = utils.expensesInDate(eachExpense, currentUser, selectedDate);

        // Overall Expenses
        if (thisUsersExpenses.length > 1) {
            totalExpenses = utils.totalExpense(thisUsersExpenses);
        } else if (thisUsersExpenses.length === 1) {
            totalExpenses = thisUsersExpenses[0].value.expense;
        } else {
            totalExpenses = 0;
        }
    }

    return (
        <div className="col-sm-12" style={pad0}>
            <div className="card card1">
                <div className="card-block">
                    <h3 className="card-title">
                        Total Money Spent <i className="fa fa-money float-right" />
                    </h3>
                    <p className="card-text">
                        <i className="fa fa-usd" aria-hidden="true" /> {totalExpenses}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TotalCard;
