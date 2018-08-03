import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import { SignUpLink } from "../signUp/index";
import { auth } from "../../firebase";
import * as routes from "../../constants/routes";
import firebase from "firebase";

const SignInPage = ({ history }) => (
    <div>
        <SignInForm history={history} />
    </div>
);

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value
});

const INITIAL_STATE = {
    email: "",
    password: "",
    error: null
};

class SignInForm extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    callGoogleSignIn = () => {
        const { history } = this.props;

        let provider = new firebase.auth.GoogleAuthProvider();

        firebase
            .auth()
            .signInWithPopup(provider)
            .then(result => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                let token = result.credential.accessToken;

                // The signed-in user info.
                let user = result.user;

                history.push(routes.HOME);
            })
            .catch(error => {
                // Handle Errors here.
                let errorCode = error.code;
                let errorMessage = error.message;

                // The email of the user's account used.
                let email = error.email;

                // The firebase.auth.AuthCredential type that was used.
                let credential = error.credential;

                alert(errorMessage, "Retry !!!");
                // ...
            });
    };

    onSubmit = event => {
        const { email, password } = this.state;

        const { history } = this.props;

        auth.doSignInWithEmailAndPassword(email, password)
            .then(authUser => {
                // allow signin only when user is verified
                if (authUser && authUser.emailVerified) {
                    this.setState(() => ({ ...INITIAL_STATE }));
                    history.push(routes.HOME);
                } else {
                    history.push(routes.USER_VERIFICATION);
                }
            })
            .catch(error => {
                this.setState(byPropKey("error", error));
            });

        event.preventDefault();
    };

    render() {
        const { email, password, error } = this.state;
        const styles = {
         marginTop: '2px',
         marginLeft: '400px',
         width: '350px',
         height: '250px',

       };
        const isInvalid = password === "" || email === "";

        return (
            <div className="container">
                <div className="row">

                    <div style={styles}>

                        <div className="login-page" className="sub-main-w3">

                            <form onSubmit={this.onSubmit} className="form">

                                  <input
                                      value={email}
                                      onChange={event => this.setState(byPropKey("email", event.target.value))}
                                      type="text"
                                      placeholder="Email Address"
                                  />


                                  <input
                                      value={password}
                                      onChange={event => this.setState(byPropKey("password", event.target.value))}
                                      type="password"
                                      placeholder="Password"
                                  />

                                <button disabled={isInvalid} type="submit">
                                    Sign In
                                </button>

								 <p>
                                    {" "}
                                    <Link to={routes.PASSWORD_FORGET}>Forgot password?</Link>
                                </p>


                                <hr />

                                <img height="50px" width="260px"  onClick={this.callGoogleSignIn} src="https://i.stack.imgur.com/vq3yH.jpg"  />

                                {error && <p>{error.message}</p>}
                            </form>

                            <SignUpLink />
                        </div>

                    </div>
                </div>
            </div>

        );
    }
}

export default withRouter(SignInPage);

export { SignInForm };
