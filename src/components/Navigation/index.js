import React from "react";
import { Link } from "react-router-dom";

import SignOutButton from "../SignOut/index";
import * as routes from "../../constants/routes";
import Background from '../../assets/images/1.jpg';
const NavigationAuth = props => {
    const burgerToggle = () => {
        let linksEl = document.querySelector(".narrowLinks");
        if (linksEl.style.display === "block") {
            linksEl.style.display = "none";
        } else {
            linksEl.style.display = "block";
        }
    };

    const nightMode = { background: "#00252C", color: "#F4D680" };

    const nightModeHeader = {
        background: "#00252C",
        color: "#9AD3CB",
        fontSize: "23px!important"
    };

    const mightModeToggle = { background: "#00252C", color: "#F4D680" };

    const daymode = { background: "#f8f9fa", color: "gray" };
    const dayModeLink = { color: "gray" };
    const nightModeLink = { background: "#00252C", color: "#F4D680" };
    const mode = {backgroundImage: `url(${Background})`, color: "white"};
    return (
        <nav style={mode}>
            <div className="navWide">
                <ul className="navbar-nav">
                    <h2 className="navbar-brand">
                      <img height="50px"  src="https://cdn.discordapp.com/attachments/467078171758690324/473623813137891328/SMARTWALLETwhite.png"  />
                    </h2>
                </ul>
                <div className="wideDiv">
                    <Link
                        className={`nav-link ${window.location.pathname === "/home" ? "active" : "inactive"}`}
                        to={routes.HOME}
                        style={dayModeLink}
                    >
                        Home
                    </Link>

                    <Link
                        className={`nav-link ${window.location.pathname === "/month-view" ? "active" : "inactive"}`}
                        to={routes.MONTH_VIEW}
                        style={dayModeLink}
                    >
                        Month View
                    </Link>
                    <Link
                        className={`nav-link ${window.location.pathname === "/daily-view" ? "active" : "inactive"}`}
                        to={routes.DAILY_VIEW}
                        style={dayModeLink}
                    >
                        Everyday
                    </Link>
                    <Link
                        className={`nav-link ${window.location.pathname === "/filter-view" ? "active" : "inactive"}`}
                        to={routes.FILTER_VIEW}
                        style={dayModeLink}
                    >
                        Filter
                    </Link>
                    <Link
                        className={`nav-link ${window.location.pathname === "/statistics" ? "active" : "inactive"}`}
                        to={routes.STATISTICS_VIEW}
                        style={dayModeLink}
                    >
                        Statistics
                    </Link>
                    <Link
                      className={`nav-link ${window.location.pathname === "/account" ? "active" : "inactive"}`}
                      to={routes.ACCOUNT}
                      style={props.settings.mode === "night" ? nightModeLink : dayModeLink}
                  >
                      Profile
                  </Link>

                    <Link className="nav-link" to={routes.SIGN_IN}>
                        <SignOutButton />
                    </Link>
                </div>
            </div>
            <div className="navNarrow">
                <i
                    className="fa fa-bars fa-2x"
                    onClick={burgerToggle}
                />
                <ul className="navbar-nav">
                    <h2 className="navbar-brand">
                        <img height="50px"  src="https://cdn.discordapp.com/attachments/467078171758690324/473623813137891328/SMARTWALLETwhite.png"  />
                    </h2>
                </ul>
                <div className="narrowLinks">
                    <Link
                        className={`nav-link ${window.location.pathname === "/home" ? "active" : "inactive"}`}
                        to={routes.HOME}
                        onClick={burgerToggle}
                        style={dayModeLink}
                    >
                        Home
                    </Link>



                    <Link
                        className={`nav-link ${window.location.pathname === "/month-view" ? "active" : "inactive"}`}
                        to={routes.MONTH_VIEW}
                        onClick={burgerToggle}
                        style={dayModeLink}
                    >
                        Month View
                    </Link>
                    <Link
                        className={`nav-link ${window.location.pathname === "/daily-view" ? "active" : "inactive"}`}
                        to={routes.DAILY_VIEW}
                        onClick={burgerToggle}
                        style={dayModeLink}
                    >
                        Everyday
                    </Link>
                    <Link
                        className={`nav-link ${window.location.pathname === "/filter-view" ? "active" : "inactive"}`}
                        to={routes.FILTER_VIEW}
                        onClick={burgerToggle}
                        style={dayModeLink}
                    >
                        Filter
                    </Link>
                    <Link
                        className={`nav-link ${window.location.pathname === "/statistics" ? "active" : "inactive"}`}
                        to={routes.STATISTICS_VIEW}
                        onClick={burgerToggle}
                        style={dayModeLink}
                    >
                        Statictics
                    </Link>
                    <Link
                      className={`nav-link ${window.location.pathname === "/account" ? "active" : "inactive"}`}
                      to={routes.ACCOUNT}
                      style={props.settings.mode === "night" ? nightModeLink : dayModeLink}
                  >
                      Profile
                  </Link>


                    <Link className="nav-link" to={routes.SIGN_IN} onClick={burgerToggle}>
                        <SignOutButton />
                    </Link>
                </div>
            </div>
        </nav>
    );
};

const NavigationNonAuth = () => {
    const burgerToggle = () => {
        let linksEl = document.querySelector(".narrowLinks");
        if (linksEl.style.display === "block") {
            linksEl.style.display = "none";
        } else {
            linksEl.style.display = "block";
        }
    };
const mode1 = {backgroundImage: `url(${Background})`, color: "white"};
    return (
        <nav style={mode1}>
            <div className="navWide">
                <ul className="navbar-nav">
                    <h2 className="navbar-brand">
                      <img height="50px"  src="https://cdn.discordapp.com/attachments/467078171758690324/473623813137891328/SMARTWALLETwhite.png"  />
                    </h2>
                </ul>
                <div className="wideDiv">
                    {/* <Link
                        className={`nav-link ${window.location.pathname === "/signin" ? "active" : "inactive"}`}
                        to={routes.SIGN_IN}
                    >
                        Sign In
                    </Link> */}

                    <Link
                        to="#"
                    >

                    </Link>
                </div>
            </div>
            <div className="navNarrow">
                <i className="fa fa-bars fa-2x" onClick={burgerToggle} />
                <ul className="navbar-nav">
                    <h2 className="navbar-brand">Smart Wallet</h2>
                </ul>

            </div>
        </nav>
    );
};

const Navigation = ({ authUser, settings }) => {
    return (
        <div>
            {authUser && authUser.emailVerified && settings ? (
                <NavigationAuth settings={settings} />
            ) : (
                <NavigationNonAuth />
            )}
        </div>
    );
};

export default Navigation;
