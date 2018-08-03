import React from "react";
import ExpenseRow from "../Common/ExpenseRow";
import Loader from "../Common/Loader";
import * as utils from "../Util";

const Expense = props => {
    let expenses = props.expenses;
    let currentUser = props.authUser;
    let dateSelected = props.date;

    if (!expenses || !currentUser) {
        return (
            <tr>
                <td>
                    <Loader />
                </td>
                <td>
                    <Loader />
                </td>
                <td>
                    <Loader />
                </td>
                <td>
                    <Loader />
                </td>
                <td>
                    <Loader />
                </td>
                <td>
                    <Loader />
                </td>
                <td>
                    <Loader />
                </td>
            </tr>
        );
    }

    if (expenses && currentUser) {
        let eachExpense = utils.eachExpense(expenses);
        let thisUsersExpenses = utils.expensesInDate(eachExpense, currentUser, dateSelected);

        if (thisUsersExpenses.length) {
            return thisUsersExpenses.map((elem, i) => {
                return (
                    <ExpenseRow
                        user={props.authUser}
                        expense={elem}
                        num={i}
                        key={i}
                        expenseId={thisUsersExpenses[i].key}
                        settings={props.settings}
                    />
                );
            });
        } else {
            return (
                <tr>
                    <td>
                        <div className="alert alert-info" role="alert">
                            You haven't spent a penny on {props.date}{" "}
                        </div>
                    </td>
                </tr>
            );
        }
    }
};

export default Expense;
