import React, { Component } from "react";

import DatePicker from "react-datepicker";
import moment from "moment";

import ExpenseTable from "./ExpenseTable.js";
import TotalCard from "./TotalCard";

import DoughnutChart from "./DoughnutChart";

import Loader from "./../Common/Loader";
import Background from '../../assets/images/1.jpg';
import Background1 from '../../assets/images/2.jpg';
class DailyViewPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: moment()
        };
    }

    handelDateSelect(date) {
        this.setState({
            date: date
        });
    }

    render() {
        const datePickerHeader = {
            backgroundImage: `url(${Background1})`,
            color: "#fff",
            padding: "15px",
            margin: "0 0 15px 0",
            borderRadius: "5px"
        };

        const leftCol = {
            borderRight: "2px solid rgba(0,0,0,0.2)"
        };

        const form = {
            padding: "15px 0 0 0"
        };

        const pad15 = {
            padding: "15px"
        };

        const styleFromSettings = {
            fontFamily: this.props.settings ? this.props.settings.font : "sans-serif",
            backgroundImage: `url(${Background})`,
            minHeight: "91vh"
        };

        const nmBgForCharts = {
            backgroundColor: this.props.settings
                ? this.props.settings.mode === "night"
                    ? "#ddd"
                    : "#EDF0EF"
                : "#EDF0EF",
            padding: "35px",
            margin: "15px 0"
        };

        const white = {
            color: "#fff"
        };

        if (this.props.settings) {
            return (
                <div className="container-fluid" style={styleFromSettings}>
                    <div className="row">
                    <div className="col-sm-8">
                        <div
                            className="col-sm-12"
                            style={this.props.settings.mode === "night" ? nmBgForCharts : pad15}
                        >
                            <DoughnutChart
                                expenses={this.props.expenses}
                                date={this.state.date.format("MM/DD/YYYY")}
                                authUser={this.props.user}
                            />
                        </div>

                        <ExpenseTable
                            expenses={this.props.expenses}
                            date={this.state.date.format("MM/DD/YYYY")}
                            authUser={this.props.user}
                            settings={this.props.settings}
                        />
                    </div>
                        <div className="col-sm-4" style={leftCol}>
                            <form onSubmit={this.handleSubmit} style={form}>
                                <div style={datePickerHeader}> View your spendings on a particular date </div>
                                <div className="form-group row">
                                    <label className="col-2 col-form-label" style={white}>
                                        <span>Date</span>
                                    </label>
                                    <div className="col-10">
                                        <DatePicker
                                            className={
                                                "form-control date "
                                            }
                                            name="date"
                                            selected={this.state.date}
                                            onSelect={this.handelDateSelect.bind(this)}
                                        />
                                    </div>
                                </div>
                            </form>
                            <TotalCard
                                expenses={this.props.expenses}
                                date={this.state.date.format("MM/DD/YYYY")}
                                authUser={this.props.user}
                            />

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
    }
}

export default DailyViewPage;
