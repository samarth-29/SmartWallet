import React from "react";
import AddExpenseForm from "./AddExpenseForm";
import Background from '../../assets/images/2.jpg';
const AddExpensePopup = props => {
    const nightModePopup = {
        backgroundColor: "rgba(#828282, 0.9)"
    };

    return (
        <div className="popup">
            <div className="popup_inner" style={nightModePopup}>
                <div className="addExpenseHeader"> Add an expense </div>
                <AddExpenseForm user={props.user} settings={props.settings} />
                <button id="closePopup" onClick={props.closePopup}>
                    {" "}
                    X{" "}
                  
                </button>
            </div>
        </div>
    );
};

export default AddExpensePopup;
