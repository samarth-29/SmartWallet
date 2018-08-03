import React, { Component } from "react";

import MonthExpenseTable from "./MonthExpenseTable";
import TotalCard from "./TotalCard";

import DoughnutChart from "./DoughnutChart";

import Loader from "./../Common/Loader";
import Background from '../../assets/images/1.jpg';
import Background1 from '../../assets/images/2.jpg';
class MonthViewPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            year: new Date().getFullYear().toString(),
            month: new Date().getMonth().toString()
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        var change = {};
        change[e.target.name] = e.target.value;
        this.setState(change);
    }

    render() {
        const Header = {
            backgroundImage: `url(${Background1})`,
            color: "#fff",
            padding: "15px",
            margin: "0 0 15px 0",
            borderRadius: "5px"
        };

        const pad15 = {
            padding: "15px"
        };

        const leftCol = {
            borderRight: "2px solid rgba(0,0,0,0.2)"
        };

        const form = {
            padding: "15px 0 0 0"
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



        const defaultStyle = { background: "#fff", color: "#495057" };

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
                                authUser={this.props.user}
                                month={this.state.month}
                                year={this.state.year}
                            />
                        </div>

                        <MonthExpenseTable
                            expenses={this.props.expenses}
                            authUser={this.props.user}
                            month={this.state.month}
                            year={this.state.year}
                            settings={this.props.settings}
                        />
                    </div>
                        <div className="col-sm-4" style={leftCol}>
                            <form style={form}>
                                <div style={Header}> View your expenses of a particular month </div>

                                <div className="form-group row">
                                    <label className="col-sm-3 col-xs-6 col-form-label" style={white}>
                                        <span>Month</span>
                                    </label>
                                    <div className="col-sm-9 col-xs-6">
                                        <select
                                            className="form-control"
                                            name="month"
                                            value={this.state.month}
                                            onChange={this.handleChange.bind(this)}
                                            style={this.props.settings.mode =  defaultStyle}
                                        >
                                            <option value="0">January</option>
                                            <option value="1">February</option>
                                            <option value="2">March</option>
                                            <option value="3">April</option>
                                            <option value="4">May</option>
                                            <option value="5">June</option>
                                            <option value="6">July</option>
                                            <option value="7">August</option>
                                            <option value="8">September</option>
                                            <option value="9">October</option>
                                            <option value="10">November</option>
                                            <option value="11">December</option>
                                        </select>
                                    </div>
                                </div>
                            </form>
                            <TotalCard
                                expenses={this.props.expenses}
                                authUser={this.props.user}
                                month={this.state.month}
                                year={this.state.year}
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

export default MonthViewPage;
