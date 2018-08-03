import React from "react";
import { Doughnut } from "react-chartjs-2";
import Loader from "../Common/Loader";
import * as utils from "../Util";

const DoughnutChartCategory = props => {
    let expenses = props.expenses;
    let currentUser = props.authUser;

    let allCategoryTotals = null;

    if (!expenses || !currentUser) {
        return (
            <div>
                <Loader />
            </div>
        );
    }

    if (expenses && currentUser) {
        let eachExpense = utils.eachExpense(expenses);
        let usersExpenses = utils.currentUsersExpenses(eachExpense, currentUser);

        allCategoryTotals = utils.calculateTotalForAllCategories(usersExpenses);

        let data = {
            labels: utils.categories,
            datasets: [
                {
                    data: Object.values(allCategoryTotals),
                    backgroundColor: utils.categoryColors,
                    hoverBackgroundColor: utils.categoryColors
                }
            ]
        };

        const options = {
            legend: {
              labels: {
                  fontColor: "white",
                  fontSize: 15
              },
                display: true,
                position: "right",
                fullWidth: true,
                reverse: false
            }
        };

        const optionsMobile = {
            legend: {
                display: false
            }
        };

        return (
            <div>
                <Doughnut data={data} options={window.screen.width > 720 ? options : optionsMobile} responsive={true} />
            </div>
        );
    }
};

export default DoughnutChartCategory;
