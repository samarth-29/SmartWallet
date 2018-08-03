import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import Loader from '../Common/Loader'
import * as utils from '../Util'

const DoughnutChart = (props) => {
    let expenses = props.expenses;
    let currentUser = props.authUser;
    let dateSelected = props.date;

    let allCategoryTotals = null;

    if (!expenses || !currentUser || !dateSelected) {
        return <div><Loader /></div>
    }

    if (expenses && currentUser && dateSelected) {
        let eachExpense = utils.eachExpense(expenses);
        let thisUsersExpenses = utils.expensesInDate(eachExpense, currentUser, dateSelected)

        allCategoryTotals = utils.calculateTotalForAllCategories(thisUsersExpenses);

        let data = {
            labels: utils.categories,
            datasets: [{
                data: Object.values(allCategoryTotals),
                backgroundColor: utils.categoryColors,
                hoverBackgroundColor: utils.categoryColors
            }]
        };

        const options = {
            legend : {
                labels: {
                    fontColor: "white",
                    fontSize: 15
                },
                display: true,
                position: 'left',
                fullWidth: true,
                reverse: false,
            }
        }

        const optionsMobile = {
            legend : {
                display: false
            }
        }

        return (
            <div>
                <Doughnut data={data} options={window.screen.width > 720 ? options : optionsMobile} responsive={true} />
            </div>
        );
    }
}

export default DoughnutChart
