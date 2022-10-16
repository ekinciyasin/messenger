import { signup } from "../api/apiCalls";
import React, { Component } from "react";

import { withTranslation } from "react-i18next";
import LanguageSelector from "../components/LanguageSelector";
import Input from "../components/Input";

class UserSignUp extends Component {
  state = {
    username: null,
    agreeCliked: false,
    displayName: null,
    password: null,
    passwordRepeat: null,
    pendingApiCall: false,
    errors: {},
  };
  onChangeHandler = (event) => {
    const { t } = this.props;
    const { name, value } = event.target;
    const errors = { ...this.state.errors };
    errors[name] = undefined;
    if (name === "password" || name === "passwordRepeat") {
      if (name === "password" && value !== this.state.passwordRepeat) {
        errors.passwordRepeat = t("Password mistmatch");
      } else if (name === "passwordRepeat" && value !== this.state.password) {
        errors.passwordRepeat = t("Password mistmatch");
      } else {
        errors.passwordRepeat = undefined;
      }
    }
    this.setState({
      [name]: value,
      errors,
    });
  };

  onChangeAgree = (event) => {
    this.setState({
      agreeCliked: event.target.checked,
    });
    console.log(event.targe.value);
  };

  onClickSignUp = async (event) => {
    event.preventDefault();
    const { username, displayName, password, passwordRepeat } = this.state;
    //key value degeleri ayni ise js özelligi olarak sadece keyleri yazmak da yeterli
    //"Destructuring assignment or object destructuring"
    const body = {
      username: username,
      displayName: displayName,
      password: password,

      // username,
      // displayName,
      // password,
    };
    if (passwordRepeat !== password) {
      this.setState({ errors: { passwordRepeat: "Passwords not same!" } });
      return;
    }
    this.setState({ pendingApiCall: true });

    // signup(body)
    //   .then((response) => {
    //     this.setState({ pendingApiCall: false });
    //   })
    //   .catch((error) => {
    //     this.setState({ pendingApiCall: false });
    //   });

    // api call bir baska yöntem ile js in yeni yöntemi ile yapacak olursak

    try {
      const response = await signup(body);
    } catch (error) {
      if (error.response.data.validationErrors) {
        console.log(error.response.data.validationErrors);
        this.setState({ errors: error.response.data.validationErrors });
      }
    }

    this.setState({ pendingApiCall: false });
  };
  render() {
    const { t } = this.props;
    const { pendingApiCall, errors } = this.state;
    const { username, displayName, password, passwordRepeat } = errors;
    return (
      <div className="container">
        <form>
          <h1 className="text-center">{this.props.t("Sign Up")}</h1>
          <Input
            name="username"
            label={t("Username")}
            error={username}
            onChange={this.onChangeHandler}
          />
          <Input
            name="displayName"
            label={t("Display Name")}
            error={displayName}
            onChange={this.onChangeHandler}
          />
          <Input
            name="password"
            label={t("Password")}
            error={password}
            type="password"
            onChange={this.onChangeHandler}
          />
          <Input
            name="passwordRepeat"
            label={t("Password Repeat")}
            error={passwordRepeat}
            type="password"
            onChange={this.onChangeHandler}
          />

          <div className="text-center form-group mt-3">
            {!pendingApiCall && (
              <button className="btn btn-primary" onClick={this.onClickSignUp}>
                {t("Sign Up")}
              </button>
            )}
            {pendingApiCall && (
              <button className="btn btn-primary" disabled={true}>
                <span className="spinner-border spinner-border-sm"></span>
                {t("Sign Up")}
              </button>
            )}
          </div>
        </form>
      </div>
    );
  }
}
const UserSignUpWithTranslation = withTranslation()(UserSignUp);
export default UserSignUpWithTranslation;
