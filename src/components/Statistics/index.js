import React from "react";

import BarChartAllMonths from "./BarChartAllMonths";
import DoughnutChartCategory from "./DoughnutChartCategory";
import Loader from "./../Common/Loader";
import Background from '../../assets/images/1.jpg';
import Background1 from '../../assets/images/2.jpg';
const marB15 = {
    marginBottom: "15px",
    marginTop: "135px"
};

const StatisticsPage = props => {
    const styleFromSettings = {
        fontFamily: props.settings ? props.settings.font : "sans-serif",
        backgroundImage: `url(${Background})`,
        minHeight: "91vh"
    };

    const nmBgForCharts = {
        backgroundColor: "#EDF0EF",
        padding: "10px",
        marginTop: "135px",
        border: "5px solid #a4a499"
    };
    const Header = {
        backgroundImage: `url(${Background1})`,
        color: "#fff",
        marginTop: "20px",
        marginLeft: "450px",
        marginBottom: "30px",
        borderRadius: "5px",
        padding: "10px"
    };

    if (props.settings) {
        return (
          <div className="container-fluid" style={styleFromSettings}>

              <div className="row">
                  <div className="col-sm-6" style={Header}> Overall Spending based on category and months. </div>
                  <br /><br /><br />
                  <div className="col-sm-6">
                      <BarChartAllMonths expenses={props.expenses} authUser={props.user} />
                      <span className="badge badge-light">Monthly expenses for this year</span>
                  </div>
                  <div className="col-sm-6">
                      <DoughnutChartCategory expenses={props.expenses} authUser={props.user} />
                      <span className="badge badge-light">Total Expense for each category</span>
                  </div>
              </div>

          </div>
        );
    } else {
        return (
            <div>
                <Loader />
            </div>
        );
    }
};

export default StatisticsPage;
