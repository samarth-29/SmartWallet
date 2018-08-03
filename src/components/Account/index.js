import React from "react";
import url from "./avtar.jpg";
import { Link } from "react-router-dom";
import * as routes from "../../constants/routes";
import Loader from "./../Common/Loader";
import Background from '../../assets/images/1.jpg';
const AccountPage = props => {
    const userImage = {
        width: "200px",
        height: "200px",
        borderRadius: "15px",
        margin: "2% auto 0 auto",
        display: "block"
    };

    const center = {
        margin: "0 auto",
        display: "block"
    };

    const styleFromSettings = {
        fontFamily: props.settings ? props.settings.font : "sans-serif",
        backgroundImage: `url(${Background})`,
        minHeight: "91vh",
        padding: "2.33%"
    };

    if (props.user) {
        const test = {
            borderRadius: "10px",
            outline: "none"
        };

        if (props.settings) {
            return (
                <div className="container-fluid" style={styleFromSettings}>
                    <img src={props.user.photoURL || url} style={userImage} alt="something's wrong" />
                    <div className="row">
                        <div className="col-sm-10 col-md-10 col-lg-5" style={center}>
                            <div className="card card1">
                                <div className="card-body">
                                    <h5 className="card-title">Hello {props.user.displayName || props.user.email}</h5>
                                    <hr />
                                    <p className="card-title">Registered email : {props.user.email}</p>
                                    <hr />
                                  
                                </div>
                            </div>
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
    } else {
        return (
            <div className="container">
                <img src={url} style={userImage} alt="somethig's wrong" />
                <div className="row">
                    <div className="col-sm-5" style={center}>
                        <div className="card card3">
                            <div className="card-body">
                                <h5 className="card-title">Hello User</h5>
                                <hr />
                                <p className="card-title">Getting your registered email</p>
                                <hr />
                                <p className="card-title">{"we're checking wether you're a verified user"}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default AccountPage;
