import React, { Component } from "react";
import Input from "../components/Input";
import { withTranslation } from "react-i18next";
import { login } from "../api/apiCalls";

class LoginPage extends Component {
  state = {
    username: "",
    password: "",
  };

  onChangeHandler = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });

    console.log(this.state.username + " " + this.state.password);
  };
  onClickLogin = async (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    const creds = {
      username,
      password,
    };
    login(creds);
  };

  render() {
    const { t } = this.props;
    return (
      <div className="container">
        <form>
          <h1 className="text-center">{t("Login")}</h1>
          <Input
            name="username"
            label={t("Username")}
            error={undefined}
            onChange={this.onChangeHandler}
          />
          <Input
            name="password"
            label={t("Password")}
            error={undefined}
            type="password"
            onChange={this.onChangeHandler}
          />
          <div className="text-center form-group mt-3">
            <button className="btn btn-primary" onClick={this.onClickLogin}>
              {t("Login")}
            </button>
          </div>
        </form>
      </div>
    );
  }
}
const LoginPageWithTranslation = withTranslation()(LoginPage);
export default LoginPageWithTranslation;
