import React, { Component } from "react";

import ExpenseTable from "./ExpenseTable.js";
import AddExpensePopup from "./AddExpensePopup";

import Cards from "./Cards";

import Loader from "./../Common/Loader";
import Background from '../../assets/images/1.jpg';

class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showPopup: false,
            showPopup1: false
        };
    }

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }

    render() {
        const styleFromSettings = {
            fontFamily: this.props.settings ? this.props.settings.font : "sans-serif",

            backgroundImage: `url(${Background})`,
            minHeight: "100vh"
        };

        if (this.props.settings) {
            return (
                <div>
                    <div className="col-sm-12" style={styleFromSettings}>
                    <Cards expenses={this.props.expenses} authUser={this.props.user} />
                    <img className="addexpense-btn" height="50px"  onClick={this.togglePopup.bind(this)} id="addExpense" src="https://images-platform.99static.com/7qa3U7A2HyhjidneoU9AlNJEObI=/500x500/top/smart/99designs-contests-attachments/49/49121/attachment_49121352" />

                    <br /><br /><br />
                        <ExpenseTable
                            expenses={this.props.expenses}
                            authUser={this.props.user}
                            settings={this.props.settings}
                        />
                    </div>

                    {this.state.showPopup ? (
                        <AddExpensePopup
                            user={this.props.user}
                            closePopup={this.togglePopup.bind(this)}
                            settings={this.props.settings}
                        />
                    ) : null}


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

export default HomePage;
